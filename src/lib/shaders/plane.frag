varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 iResolution;
uniform float iTime;

void mainImage(out vec4 fragColor,vec2 fragCoord){
    vec2 uv=(fragCoord*2.-iResolution.xy)/min(iResolution.x,iResolution.y)*1.5;
    float t=iTime*.3;
    
    float a=0.;
    float b=0.;
    float c=1.;
    for(float i=0.;i<4.;++i){
        a=sin(-b*b-uv.x);
        b=cos(-a*a+c*c-uv.y-cos(t-a*b*c+uv.x));
        c=cos(a-b*b+c-t);
    }
    vec3 col=vec3(a,b,0);
    col=sin(col*1.6+vec3(.4,.6,1.5));
    col*=sqrt(abs(col));
    col=cos(sqrt(sqrt(cos(col*1.56)))*1.1-vec3(abs(col.r)*.5,.5,.5));
    col=col*2./(1.+col);
    col.rg-=c*c*.1;
    
    fragColor=vec4(col,1);
}

void main(){
    mainImage(gl_FragColor,gl_FragCoord.xy);
}