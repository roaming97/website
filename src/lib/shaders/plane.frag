varying vec2 vUv;
varying vec3 vPosition;

const float PI=3.141592654;
const float TAU=2.*PI;

uniform vec3 iResolution;
uniform float iTime;

// CC0: Reflective hexes
//  Bit of weekend tinkering
//  Some shadow artefacts which are irritating but felt it was overall good enough to share.

#define TIME iTime
#define RESOLUTION iResolution

#define TOLERANCE.0001
#define MAX_RAY_LENGTH 24.
#define MAX_RAY_MARCHES 10
#define MAX_SHADOW_MARCHES 20
#define NORM_OFF.001
#define ROT(a)mat2(cos(a),sin(a),-sin(a),cos(a))

// License: WTFPL, author: sam hocevar, found: https://stackoverflow.com/a/17897228/418488
const vec4 hsv2rgb_K=vec4(1.,2./3.,1./3.,3.);
vec3 hsv2rgb(vec3 c){
    vec3 p=abs(fract(c.xxx+hsv2rgb_K.xyz)*6.-hsv2rgb_K.www);
    return c.z*mix(hsv2rgb_K.xxx,clamp(p-hsv2rgb_K.xxx,0.,1.),c.y);
}
// License: WTFPL, author: sam hocevar, found: https://stackoverflow.com/a/17897228/418488
//  Macro version of above to enable compile-time constants
#define HSV2RGB(c)(c.z*mix(hsv2rgb_K.xxx,clamp(abs(fract(c.xxx+hsv2rgb_K.xyz)*6.-hsv2rgb_K.www)-hsv2rgb_K.xxx,0.,1.),c.y))

const float hoff=.15;
const float stepf=.8;
const vec3 skyCol=HSV2RGB(vec3(hoff+.57,.70,.25));
const vec3 sunCol1=HSV2RGB(vec3(hoff+.60,.50,.5));
const vec3 sunCol2=HSV2RGB(vec3(hoff+.05,.75,25.));
const vec3 diffCol=HSV2RGB(vec3(hoff+.60,.75,.25));
const vec3 sunDir1=normalize(vec3(3.,3.,-7.));

// License: Unknown, author: nmz (twitter: @stormoid), found: https://www.shadertoy.com/view/NdfyRM
vec3 sRGB(vec3 t){
    return mix(1.055*pow(t,vec3(1./2.4))-.055,12.92*t,step(t,vec3(.0031308)));
}

// License: Unknown, author: Matt Taylor (https://github.com/64), found: https://64.github.io/tonemapping/
vec3 aces_approx(vec3 v){
    v=max(v,0.);
    v*=.6f;
    float a=2.51f;
    float b=.03f;
    float c=2.43f;
    float d=.59f;
    float e=.14f;
    return clamp((v*(a*v+b))/(v*(c*v+d)+e),0.f,1.f);
}

// License: MIT, author: Inigo Quilez, found: https://iquilezles.org/articles/distfunctions/
float rayPlane(vec3 ro,vec3 rd,vec4 p){
    return-(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);
}

// License: MIT, author: Inigo Quilez, found: https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
float box(vec2 p,vec2 b){
    vec2 d=abs(p)-b;
    return length(max(d,0.))+min(max(d.x,d.y),0.);
}

// License: Unknown, author: Martijn Steinrucken, found: https://www.youtube.com/watch?v=VmrIDyYiJBA
vec2 hextile(inout vec2 p){
    // See Art of Code: Hexagonal Tiling Explained!
    // https://www.youtube.com/watch?v=VmrIDyYiJBA
    const vec2 sz=vec2(1.,sqrt(3.));
    const vec2 hsz=.5*sz;
    
    vec2 p1=mod(p,sz)-hsz;
    vec2 p2=mod(p-hsz,sz)-hsz;
    vec2 p3=dot(p1,p1)<dot(p2,p2)?p1:p2;
    vec2 n=((p3-p+hsz)/sz);
    p=p3;
    
    n-=vec2(.5);
    // Rounding to make hextile 0,0 well behaved
    return round(n*2.)*.5;
}

// License: MIT, author: Inigo Quilez, found: https://iquilezles.org/articles/distfunctions/
float hexPrism(vec3 p,vec2 h){
    const vec3 k=.5*vec3(-sqrt(3.),1.,sqrt(4./3.));
    p=abs(p);
    p.xy-=2.*min(dot(k.xy,p.xy),0.)*k.xy;
    vec2 d=vec2(
        length(p.xy-vec2(clamp(p.x,-k.z*h.x,k.z*h.x),h.x))*sign(p.y-h.x),
    p.z-h.y);
    return min(max(d.x,d.y),0.)+length(max(d,0.));
}

float df(vec3 p){
    vec3 p0=p.zyx;
    p0.xy-=.1*TIME;
    vec2 n0=hextile(p0.yx);
    float pp=n0.x-.25*n0.y-.5*TIME;
    p0.z+=.2*sin(pp);
    p0.zy*=ROT(-.2*cos(pp));
    return hexPrism(p0,vec2(.425,.25))-.075;
}

vec3 normal(vec3 pos){
    vec2 eps=vec2(NORM_OFF,0.);
    vec3 nor;
    nor.x=df(pos+eps.xyy)-df(pos-eps.xyy);
    nor.y=df(pos+eps.yxy)-df(pos-eps.yxy);
    nor.z=df(pos+eps.yyx)-df(pos-eps.yyx);
    return normalize(nor);
}

float rayMarch(vec3 ro,vec3 rd,float initt){
    float t=initt;
    const float tol=TOLERANCE;
    vec2 dti=vec2(1e10,0.);
    int i=0;
    for(i=0;i<MAX_RAY_MARCHES;++i){
        float d=df(ro+rd*t);
        if(d<dti.x){dti=vec2(d,t);}
        if(d<TOLERANCE||t>MAX_RAY_LENGTH){
            break;
        }
        t+=stepf*d;
    }
    if(i==MAX_RAY_MARCHES){t=dti.y;};
    return t;
}

float softShadow(vec3 ps,vec3 ld,float mint,float k){
    float res=1.;
    float t=mint*3.;
    for(int i=0;i<MAX_SHADOW_MARCHES;++i){
        vec3 p=ps+ld*t;
        float d=df(p);
        res=min(res,k*d/t);
        if(res<TOLERANCE)break;
        
        t+=max(d,mint);
    }
    return clamp(res,0.,1.);
}

vec3 render0(vec3 ro,vec3 rd){
    vec3 col=vec3(0.);
    float sd=max(dot(sunDir1,rd),0.);
    float sf=1.0001-sd;
    col+=.5*skyCol*pow((1.-abs(rd.y)),8.);
    col+=sunCol1*pow(sd,100.);
    col+=sunCol2*pow(sd,800.);
    
    float tp1=rayPlane(ro,rd,vec4(vec3(0.,-1.,0.),6.));
    
    if(tp1>0.){
        vec3 pos=ro+tp1*rd;
        vec2 pp=pos.xz;
        float db=box(pp,vec2(5.,9.))-3.;
        
        col+=vec3(4.)*skyCol*rd.y*rd.y*smoothstep(.25,0.,db);
        col+=vec3(.8)*skyCol*exp(-.5*max(db,0.));
        col+=.25*sqrt(skyCol)*max(-db,0.);
    }
    
    return clamp(col,0.,10.);;
}

vec3 render(vec3 ro,vec3 rd){
    float initt=-(ro.x-2./3.)/rd.x;
    float t=rayMarch(ro,rd,initt);
    vec3 p=ro+rd*t;
    vec3 n=normal(p);
    vec3 r=reflect(rd,n);
    vec3 ld=sunDir1;
    const float soff=.0001;
    float sd=softShadow(p+soff*n,ld,.0125,3.);
    float dif=max(dot(ld,n),0.);
    dif*=dif;
    dif*=dif;
    vec3 rcol=render0(p,r);
    vec3 col=vec3(0.);
    if(t<MAX_RAY_LENGTH){
        col=diffCol;
        col*=mix(.2,1.,dif);
        col*=mix(.2,1.,abs(sd));
        col+=rcol*sd;
    }
    return col;
}

vec3 effect(vec2 p){
    const vec3 ro=.66*vec3(5.,-1.,1.3);
    //  const vec3 ro = 0.8*vec3(5.0, 0.0, 0.0);
    const vec3 la=vec3(0.,0.,0.);
    const vec3 up=normalize(vec3(0.,1.,.3));
    const vec3 ww=normalize(la-ro);
    const vec3 uu=normalize(cross(up,ww));
    const vec3 vv=(cross(ww,uu));
    const float fov=tan(TAU/6.);
    vec3 rd=normalize(-p.x*uu+p.y*vv+fov*ww);
    vec3 col=render(ro,rd);
    return col;
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 q=fragCoord/RESOLUTION.xy;
    vec2 p=-1.+2.*q;
    vec2 pp=p;
    p.x*=RESOLUTION.x/RESOLUTION.y;
    vec3 col=vec3(0.);
    col=effect(p);
    col*=smoothstep(1.5,.75,length(pp));
    col=aces_approx(col);
    col=sRGB(col);
    fragColor=vec4(col,1.);
}

void main(){
    mainImage(gl_FragColor,gl_FragCoord.xy);
}