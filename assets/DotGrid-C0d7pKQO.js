import{r as K,j as Ze,P as c}from"./index-CjRP_3Id.js";const xt=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aMotion;
layout(location = 2) in vec2 aState;

uniform vec2 uResolution;
uniform float uSize;
uniform float uSwell;
uniform float uStretch;
uniform float uGlow;

out vec2 vLocal;
out vec2 vPoint;
out float vLength;
out float vRadius;
out float vEnergy;

void main() {
  float energy = aState.x;
  float radius = 0.5 * uSize * aState.y * (1.0 + uSwell * energy);
  float speed = length(aMotion.zw);
  float angle = speed > 0.001 ? atan(aMotion.w, aMotion.z) : 0.0;
  float axis = floor(angle / 1.5707963 + 0.5) * 1.5707963;
  angle = axis + (angle - axis) * smoothstep(8.0, 70.0, speed);
  vec2 dir = vec2(cos(angle), sin(angle));
  float halfLength = min(uSize * 2.0, speed * uStretch * 0.02);
  float pad = radius * (1.0 + uGlow * energy * 2.5) + 2.0;
  vec2 local = aCorner * vec2(halfLength + pad, pad);
  vec2 point = aMotion.xy + dir * local.x + vec2(-dir.y, dir.x) * local.y;
  vLocal = local;
  vPoint = point;
  vLength = halfLength;
  vRadius = radius;
  vEnergy = energy;
  vec2 clip = point / uResolution * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}
`,gt=`#version 300 es
precision highp float;

in vec2 vLocal;
in vec2 vPoint;
in float vLength;
in float vRadius;
in float vEnergy;

uniform vec2 uResolution;
uniform vec3 uBase;
uniform vec3 uActive;
uniform float uGlow;
uniform float uOpacity;
uniform float uFade;
uniform int uShape;

out vec4 outColor;

float smootherstep01(float t) {
  t = clamp(t, 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void main() {
  float d;
  if (uShape == 1) {
    float corner = vRadius * 0.3;
    vec2 q = abs(vLocal) - vec2(vLength + vRadius, vRadius) + corner;
    d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - corner;
  } else {
    d = length(vec2(max(abs(vLocal.x) - vLength, 0.0), vLocal.y)) - vRadius;
  }
  float aa = max(fwidth(d), 0.0001);
  float body = clamp(0.5 - d / aa, 0.0, 1.0);
  float halo = uGlow * vEnergy * 0.5 * exp(-max(d, 0.0) / max(vRadius * 1.3, 0.6));
  float alpha = body + (1.0 - body) * halo;
  vec3 color = mix(uBase, uActive, clamp(vEnergy * 1.2, 0.0, 1.0));
  float fade = 1.0;
  if (uFade > 0.0) {
    vec2 edge = min(vPoint, uResolution - vPoint) / (uFade * 0.4 * min(uResolution.x, uResolution.y));
    fade = smootherstep01(edge.x) * smootherstep01(edge.y);
  }
  alpha *= uOpacity * fade;
  outColor = vec4(color * alpha, alpha);
}
`,et=v=>{const p=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(v).trim());if(!p)return[1,1,1];const L=p[1].length===3?p[1].replace(/./g,x=>x+x):p[1];return[0,2,4].map(x=>parseInt(L.slice(x,x+2),16)/255)},Me=v=>{const p=Math.min(1,Math.max(0,v));return p*p*p*(p*(p*6-15)+10)},yt=v=>{const L=v-1;return 1+L*L*((1.9+1)*L+1.9)},tt=(v,p,L)=>{const x=v.createShader(p);return v.shaderSource(x,L),v.compileShader(x),v.getShaderParameter(x,v.COMPILE_STATUS)?x:(console.error(v.getShaderInfoLog(x)),v.deleteShader(x),null)},wt=({dotSize:v=5,gap:p=18,baseColor:L="#3a3446",activeColor:x="#ffffff",proximity:Re=140,strength:nt=1,bounce:ot=.6,tension:rt=.4,returnDuration:at=.8,shockRadius:it=320,shockStrength:st=5,swell:Se=.8,stretch:Fe=.5,glow:Ee=.5,shape:Le="circle",fade:Pe=0,opacity:Be=1,intro:ct=!0,mouseInteraction:_e=!0,clickShock:lt=!0,paused:Oe=!1,dpr:ut,className:ft="",style:ht})=>{const Te=K.useRef(null),ce=K.useRef(null),Ie={dotSize:v,gap:p,baseColor:L,activeColor:x,proximity:Re,strength:nt,bounce:ot,tension:rt,returnDuration:at,shockRadius:it,shockStrength:st,swell:Se,stretch:Fe,glow:Ee,shape:Le,fade:Pe,opacity:Be,intro:ct,mouseInteraction:_e,clickShock:lt,paused:Oe,dpr:ut},F=K.useRef(Ie);return K.useEffect(()=>{F.current=Ie}),K.useEffect(()=>{const M=Te.current;if(!M)return;const e=M.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!e)return;const P=e.createProgram(),ee=tt(e,e.VERTEX_SHADER,xt),te=tt(e,e.FRAGMENT_SHADER,gt);if(!ee||!te){ee&&e.deleteShader(ee),te&&e.deleteShader(te),e.deleteProgram(P);return}if(e.attachShader(P,ee),e.attachShader(P,te),e.linkProgram(P),e.deleteShader(ee),e.deleteShader(te),!e.getProgramParameter(P,e.LINK_STATUS)){console.error(e.getProgramInfoLog(P)),e.deleteProgram(P);return}const E={};for(const n of["uResolution","uSize","uSwell","uStretch","uGlow","uBase","uActive","uOpacity","uFade","uShape"])E[n]=e.getUniformLocation(P,n);const ge=e.createVertexArray();e.bindVertexArray(ge);const Ce=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,Ce),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const le=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,le),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,24,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,24,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);const ue=window.matchMedia("(prefers-reduced-motion: reduce)");let H=ue.matches;const d={width:0,height:0,left:0,top:0,ratio:1},g={count:0,cols:1,rows:1,cell:1,centerX:0,centerY:0,reach:1};let I=new Float32Array(0),s=new Float32Array(0),l=new Float32Array(0),ne=new Float32Array(0),fe=new Float32Array(0),b=new Float32Array(0),he=new Float32Array(0),C=new Float32Array(0);const t={x:0,y:0,vx:0,vy:0,time:0,inside:!1,presence:0},U=[];let R=F.current.intro&&!H?-1:null,oe=!0,D=0,ye=0;const De=()=>{const{dotSize:n,gap:o}=F.current,r=Math.max(2,n+o),m=Math.max(1,Math.floor((d.width+o)/r)),S=Math.max(1,Math.floor((d.height+o)/r)),_=(d.width-(m*r-o))/2+n/2,A=(d.height-(S*r-o))/2+n/2,f=m*S;I=new Float32Array(f*2),s=new Float32Array(f*2),l=new Float32Array(f*2),ne=new Float32Array(f*2),fe=new Float32Array(f*2),b=new Float32Array(f*4),he=new Float32Array(f),C=new Float32Array(f*6);for(let w=0;w<S;w++)for(let h=0;h<m;h++){const O=(w*m+h)*2;I[O]=_+h*r,I[O+1]=A+w*r}Object.assign(g,{count:f,cols:m,rows:S,cell:r,centerX:d.width/2,centerY:d.height/2,reach:Math.hypot(d.width,d.height)/2}),e.bindBuffer(e.ARRAY_BUFFER,le),e.bufferData(e.ARRAY_BUFFER,C.byteLength,e.DYNAMIC_DRAW)},ze=()=>{const n=M.getBoundingClientRect(),o=Math.min(F.current.dpr??window.devicePixelRatio??1,2),r=Math.max(1,Math.round(n.width)),m=Math.max(1,Math.round(n.height));Object.assign(d,{width:r,height:m,left:n.left,top:n.top,ratio:o}),M.width=Math.round(r*o),M.height=Math.round(m*o),De(),re(performance.now())},dt=(n,o)=>{const r=F.current,m=H?0:1,S=1-.85*Math.min(1,Math.max(0,r.bounce)),_=4/(S*Math.max(.2,r.returnDuration)),A=_*_,f=2*S*_,w=Math.max(1,r.proximity),h=Math.hypot(t.vx,t.vy),O=r.mouseInteraction&&t.inside?6500*Math.tanh(h/900)*r.strength*m:0,de=h>.001?t.vx/h:0,me=h>.001?t.vy/h:0,z=g.cell*1.4,ae=650,Y=U.map(u=>{const i=(o-u.start)/1e3*ae,y=Me(1-i/Math.max(1,r.shockRadius));return{...u,front:i,amplitude:y*r.shockStrength*g.cell*.24*m}}),T=(Math.max(0,r.tension)*900)**2/(g.cell*g.cell),W=Math.sqrt(T)*.06,vt=Math.sqrt(A+8*T)+f+8*W,We=Math.min(24,Math.max(1,Math.ceil(n/Math.min(1/120,1.2/vt)))),be=n/We;for(let u=0;u<g.count;u++){const i=u*2,y=I[i],a=I[i+1];let J=0,Q=0;if(O>0){const k=y+s[i]-t.x,ie=a+s[i+1]-t.y,N=Math.hypot(k,ie);if(N<w){const $=Me(1-N/w)*O,Z=N>.001?k/N:0,se=N>.001?ie/N:0;J+=$*(de+Z*.6),Q+=$*(me+se*.6)}}let q=0,G=0,X=0,j=0;for(const k of Y){if(k.amplitude<=0)continue;const ie=y-k.x,N=a-k.y,$=Math.hypot(ie,N),Z=($-k.front)/z;if(Math.abs(Z)<3&&$>.001){const se=ie/$,Ae=N/$,Je=Math.exp(-Z*Z),xe=k.amplitude*Je,Qe=k.amplitude*2*Z*Je/z*ae;q+=se*xe,G+=Ae*xe,X+=se*Qe,j+=Ae*Qe,J+=se*xe*A*.35,Q+=Ae*xe*A*.35}}ne[i]=J,ne[i+1]=Q;const pe=u*4;b[pe]=q,b[pe+1]=G,b[pe+2]=X,b[pe+3]=j}const{cols:ve,rows:$e}=g,V=ve*2;for(let u=0;u<We;u++){for(let i=0;i<$e;i++)for(let y=0;y<ve;y++){const a=(i*ve+y)*2;let J=ne[a]-A*s[a]-f*l[a],Q=ne[a+1]-A*s[a+1]-f*l[a+1];if(T>0){let q=-4*s[a],G=-4*s[a+1],X=-4*l[a],j=-4*l[a+1];y>0&&(q+=s[a-2],G+=s[a-1],X+=l[a-2],j+=l[a-1]),y<ve-1&&(q+=s[a+2],G+=s[a+3],X+=l[a+2],j+=l[a+3]),i>0&&(q+=s[a-V],G+=s[a-V+1],X+=l[a-V],j+=l[a-V+1]),i<$e-1&&(q+=s[a+V],G+=s[a+V+1],X+=l[a+V],j+=l[a+V+1]),J+=T*q+W*X,Q+=T*G+W*j}fe[a]=l[a]+J*be,fe[a+1]=l[a+1]+Q*be}for(let i=0;i<s.length;i++)l[i]=fe[i],s[i]+=l[i]*be}for(let u=0;u<g.count;u++){const i=u*2,y=u*4;he[u]=Math.min(1,Math.hypot(l[i]+b[y+2],l[i+1]+b[y+3])/380*.85+Math.hypot(s[i]+b[y],s[i+1]+b[y+1])/(g.cell*2.2)*.35)}for(let u=U.length-1;u>=0;u--)Y[u].front>r.shockRadius+z*3&&U.splice(u,1);const Ke=1-Math.exp(-n/.08);t.vx-=t.vx*Ke,t.vy-=t.vy*Ke;const pt=r.mouseInteraction&&t.inside?1:0;t.presence+=(pt-t.presence)*(1-Math.exp(-n/.2))},re=n=>{const o=F.current,r=Math.max(1,o.proximity),S=(R===null?1/0:R<0?0:(n-R)/1e3)*g.reach*1.25,_=g.cell*4;for(let w=0;w<g.count;w++){const h=w*2,O=w*4,de=I[h]+s[h]+b[O],me=I[h+1]+s[h+1]+b[O+1];let z=he[w];if(t.presence>.001){const T=Math.hypot(de-t.x,me-t.y);T<r&&(z=Math.max(z,Me(1-T/r)*.4*t.presence))}let ae=1;if(R!==null){const T=Math.hypot(I[h]-g.centerX,I[h+1]-g.centerY),W=Math.min(1,Math.max(0,(S-T)/_));ae=W>=1?1:Math.max(0,yt(W)),z=Math.max(z,Math.sin(W*Math.PI)*.6)}const Y=w*6;C[Y]=de,C[Y+1]=me,C[Y+2]=l[h]+b[O+2],C[Y+3]=l[h+1]+b[O+3],C[Y+4]=z,C[Y+5]=ae}const A=et(o.baseColor),f=et(o.activeColor);e.viewport(0,0,M.width,M.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.useProgram(P),e.uniform2f(E.uResolution,d.width,d.height),e.uniform1f(E.uSize,Math.max(.5,o.dotSize)),e.uniform1f(E.uSwell,H?0:Math.max(0,o.swell)),e.uniform1f(E.uStretch,H?0:Math.max(0,o.stretch)),e.uniform1f(E.uGlow,Math.max(0,o.glow)),e.uniform3f(E.uBase,A[0],A[1],A[2]),e.uniform3f(E.uActive,f[0],f[1],f[2]),e.uniform1f(E.uOpacity,Math.min(1,Math.max(0,o.opacity))),e.uniform1f(E.uFade,Math.min(1,Math.max(0,o.fade))),e.uniform1i(E.uShape,o.shape==="square"?1:0),e.bindVertexArray(ge),e.bindBuffer(e.ARRAY_BUFFER,le),e.bufferSubData(e.ARRAY_BUFFER,0,C),e.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,g.count),e.bindVertexArray(null)},mt=n=>{if(U.length)return!1;if(R!==null){if(R<0||(n-R)/1e3<1.6)return!1;R=null}if(Math.abs(t.vx)+Math.abs(t.vy)>1)return!1;const o=F.current.mouseInteraction&&t.inside?1:0;if(Math.abs(o-t.presence)>.002)return!1;for(let r=0;r<s.length;r++)if(Math.abs(s[r])>.02||Math.abs(l[r])>.5)return!1;return!0},Ye=n=>{if(D=0,F.current.paused||!oe||document.hidden)return;R!==null&&R<0&&(R=n);const o=Math.min(.05,(n-ye)/1e3||0);ye=n,dt(o,n),re(n),mt(n)||(D=requestAnimationFrame(Ye))},B=()=>{D||F.current.paused||!oe||(ye=performance.now(),D=requestAnimationFrame(Ye))},ke=n=>{const o=M.getBoundingClientRect();return d.left=o.left,d.top=o.top,[n.clientX-o.left,n.clientY-o.top]},Ne=n=>{if(!F.current.mouseInteraction)return;const[o,r]=ke(n),m=o>=0&&r>=0&&o<=d.width&&r<=d.height,S=n.timeStamp||performance.now();if(m&&t.inside&&t.time){const _=Math.max(4,S-t.time)/1e3,A=(o-t.x)/_,f=(r-t.y)/_;t.vx+=(A-t.vx)*.6,t.vy+=(f-t.vy)*.6}else t.vx=0,t.vy=0;t.x=o,t.y=r,t.time=S,(m!==t.inside||m)&&(t.inside=m,B())},we=()=>{t.inside=!1,t.time=0,B()},Ue=n=>{n.relatedTarget||we()},Ve=n=>{if(!F.current.clickShock||H)return;const[o,r]=ke(n);o<0||r<0||o>d.width||r>d.height||(U.push({x:o,y:r,start:performance.now()}),U.length>6&&U.shift(),B())};window.addEventListener("pointermove",Ne,{passive:!0}),window.addEventListener("pointerdown",Ve,{passive:!0}),window.addEventListener("pointerout",Ue),window.addEventListener("blur",we);const qe=n=>{n.preventDefault(),cancelAnimationFrame(D),D=0,oe=!1};M.addEventListener("webglcontextlost",qe,!1);const Ge=new ResizeObserver(()=>{ze(),B()});Ge.observe(M);const Xe=new IntersectionObserver(([n])=>{oe=n.isIntersecting,oe&&B()});Xe.observe(M);const je=()=>{document.hidden?(cancelAnimationFrame(D),D=0):B()};document.addEventListener("visibilitychange",je);const He=()=>{H=ue.matches,H&&(s.fill(0),l.fill(0),he.fill(0),t.vx=0,t.vy=0,t.presence=0,U.length=0,R=null),re(performance.now()),B()};return ue.addEventListener("change",He),ze(),B(),ce.current={rebuild:()=>{De(),re(performance.now()),B()},refresh:()=>{re(performance.now()),B()}},()=>{cancelAnimationFrame(D),Ge.disconnect(),Xe.disconnect(),window.removeEventListener("pointermove",Ne),window.removeEventListener("pointerdown",Ve),window.removeEventListener("pointerout",Ue),window.removeEventListener("blur",we),M.removeEventListener("webglcontextlost",qe,!1),document.removeEventListener("visibilitychange",je),ue.removeEventListener("change",He),e.deleteBuffer(Ce),e.deleteBuffer(le),e.deleteVertexArray(ge),e.deleteProgram(P),ce.current=null}},[]),K.useEffect(()=>{ce.current?.rebuild()},[v,p]),K.useEffect(()=>{ce.current?.refresh()},[L,x,Se,Fe,Ee,Le,Pe,Be,Oe,Re,_e]),Ze.jsx("div",{className:`dot-grid ${ft}`.trim(),style:ht,children:Ze.jsx("canvas",{ref:Te,className:"dot-grid__canvas"})})};wt.propTypes={baseColor:c.string,activeColor:c.string,dotSize:c.number,gap:c.number,proximity:c.number,tension:c.number,swell:c.number,stretch:c.number,strength:c.number,bounce:c.number,returnDuration:c.number,shockRadius:c.number,shockStrength:c.number,glow:c.number,shape:c.oneOf(["circle","square"]),fade:c.number,opacity:c.number,intro:c.bool,mouseInteraction:c.bool,clickShock:c.bool,paused:c.bool,dpr:c.number,className:c.string,style:c.object};export{wt as default};
