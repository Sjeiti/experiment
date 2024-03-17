#include "/static/glsl/noise3D.glsl"

#define PI 3.1415926535897932384626433832795
#define TWO_PI 2.0*PI
#define HALF_PI 0.5*PI

uniform float time;
uniform vec2 resolution;
uniform vec2 offset;
uniform float down;

void main(){
  vec4 fragCoord = gl_FragCoord;

  vec2 center = resolution.xy/2.0;
  vec2 spiralOffset = offset + center + vec2(-200.0,0);
  vec2 pos = fragCoord.xy - center;
  float diagonal = sqrt(resolution.x*resolution.x+resolution.y*resolution.y);

  float posdist = sqrt(pos.x*pos.x+pos.y*pos.y)/diagonal*2.0;
  float pdistCurve = 1.0-sin(posdist*HALF_PI+HALF_PI);
  float pdistRound = pow(pdistCurve,0.2);

  float angle = atan(fragCoord.y-center.y, fragCoord.x-center.x);
  float angle1 = angle/(2.0*PI)+.5;

  float dist = sqrt(pos.x*pos.x+pos.y*pos.y)/diagonal*2.0;

  float ang = 0.01*offset.y*time;
  float nd = 1.0 + 0.5*dist + 0.05*offset.x;
  float nx = nd*sin(angle);
  float ny = nd*cos(angle);
  float off = 0.1;
  float noiser = snoise(vec3(nx,ny,1.0*off+ang));
  float noiseg = snoise(vec3(nx,ny,2.0*off+ang));
  float noiseb = snoise(vec3(nx,ny,3.0*off+ang));

  vec3 wh = vec3(1.0,1.0,1.0);
  vec3 exp = vec3(1.0,1.0,1.0);
  vec3 color = vec3(1.0,0.0,0.25);
  float xp = 2.0;
  float nr = 1.0 - pow(noiser,xp);
  float ng = 1.0 - pow(noiseg,xp);
  float nb = 1.0 - pow(noiseb,xp);
  vec3 blnd = color - 0.7*vec3(nr,ng,nb)*color + 0.1*vec3(nr,ng,nb);

  vec4 fragColor = vec4(blnd,1.0);

  gl_FragColor = fragColor;
}
