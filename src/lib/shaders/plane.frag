varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 iResolution;
uniform float iTime;
uniform bool iDarkMode;

vec3 rgb2hsv(vec3 c)
{
    vec4 K=vec4(0.,-1./3.,2./3.,-1.);
    vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));
    vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));
    
    float d=q.x-min(q.w,q.y);
    float e=1.e-10;
    return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K=vec4(1.,2./3.,1./3.,3.);
    vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);
    return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);
}

void mainImage(out vec4 fragColor,vec2 fragCoord){
    vec2 uv=(fragCoord*2.-iResolution.xy)/min(iResolution.x,iResolution.y);
    float t=iTime*.2;
    
    float a=1.;
    float b=4.;
    float c=.8;
    for(float i=0.;i<8.;++i){
        a=sin(-b*b-uv.y);
        b=cos(-a*a+c*c-uv.y-cos(t-a*b*c+uv.x));
        c=cos(a-b*b+c-t);
    }
    vec3 col=vec3(a,b,0.);
    col=sin(col*1.6+vec3(.4,.6,1.5));
    col*=sqrt(abs(col));
    col=cos(sqrt(sqrt(cos(col*1.56)))*1.14-vec3(abs(col.r)*.5,.5,.5));
    col=col*2./(1.+col);
    col.rg-=c*c*.1;
    
    if(iDarkMode){
        col=vec3(1.4-col.r,1.3-col.g,1.8-col.b);
        col*=.6;
        col=rgb2hsv(col);
        col.r-=.05;
        col.g-=.1;
        col.b-=.1;
        col=hsv2rgb(col);
    }
    
    fragColor=vec4(col,1);
}

void main(){
    mainImage(gl_FragColor,gl_FragCoord.xy);
}