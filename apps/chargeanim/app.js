g.setBgColor(0, 0, 0);
g.clear().flip();
var imgbubble = require("heatshrink").decompress(atob("i0UhAebgoAFCaYXNBocjAAIWNCYoVHCw4UFIZwqELJQWFKZQVOChYVzABwVaCx7wKCqIWNCg4WMChIXJCZgAnA=="));

var W=g.getWidth(),H=g.getHeight();
var b2v = (W != 240)?-1:1;
var b2rot = (W != 240)?Math.PI:0;
var b2scale = W/240.0;
var bubbles = [];
for (var i=0;i<10;i++) {
  bubbles.push({y:Math.random()*H,ly:0,x:(0.5+(i<5?i:i+8))*W/18,v:0.6+Math.random(),s:0.5+Math.random()});
}

function anim() {
  /* we don't use any kind of buffering here. Just draw one image
  at a time (image contains a background) too, and there is minimal
  flicker. */  
  var mx = W/2.0, my = H/2.0;
  bubbles.forEach(f=>{
    f.y-=f.v * b2v;
    if (f.y<-24)
      f.y=H+8;
    else if (f.y > (H+8))
      f.y=0;
    g.drawImage(imgbubble,f.y,f.x,{scale:f.s * b2scale, rotate:b2rot});
  });
  g.flip();
}

setInterval(anim,20);

Bangle.on("charging", isCharging => {
  Bangle.setBacklight(1);
  if (!isCharging) load();
});
