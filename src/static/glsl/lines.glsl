#include "/static/glsl/noise3D.glsl"

#define PI 3.1415926535897932384626433832795

uniform float time;
uniform vec2 resolution;
uniform float size;
uniform vec2 offset;
uniform float down;

void main(){
    vec4 fragCoord = gl_FragCoord;

    float t = 0.1*time;

    vec2 center = resolution.xy/2.0;
    vec2 spiralOffset = offset + center + vec2(-200.0,0);
    vec2 pos = fragCoord.xy - center;

    float sizeAngle = 0.01*offset.x;
    float sizeRadius = 0.001*offset.y;
    float scale = 0.002;
    vec2 posScaled = scale*pos;

    float angle = sizeAngle*(snoise(vec3(posScaled,t)) - 0.5);
    float radius = sizeRadius*(snoise(vec3(posScaled,t+102.34)) - 0.5);
    float nx = radius*sin(angle);
    float ny = radius*cos(angle);

    float clr = snoise(vec3(nx,ny,32.12)) + 0.5;
    vec4 fragColor = vec4(clr,clr,clr,1.0)*vec4(1.0,0.0,0.25,1.0);

    gl_FragColor = fragColor;
}
