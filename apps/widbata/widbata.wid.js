setInterval(()=>WIDGETS["bata"].draw(), 60000);
Bangle.on('lcdPower', function(on) {
  if (on) WIDGETS["bata"].draw();
});
Bangle.on('charging', (charging)=>WIDGETS["bata"].draw());
WIDGETS["bata"]={area:"tr",sortorder:-10,width:27,draw:function() {
  var s = 26;
  var t = 13; // thickness
  var x = this.x, y = this.y + 5;
  g.reset();
  g.setColor(g.theme.fg);
  g.fillRect(x,y+2,x+s-4,y+2+t); // outer
  g.clearRect(x+2,y+2+2,x+s-4-2,y+2+t-2); // centre
  g.setColor(g.theme.fg);
  g.fillRect(x+s-3,y+2+(((t - 1)/2)-1),x+s-2,y+2+(((t - 1)/2)-1)+4); // contact
  g.fillRect(x+3, y+5, x +4 + E.getBattery()*(s-11)/100, y+t-1); // the level
  if (Bangle.isCharging()) {
    for (let off = -1; off <= 1; off++) {
      let Y = y + off;
      g.setColor(off === 0 ? '#000' : '#fff');
      g.drawPoly([x+5,Y+9, x+11,Y+7, x+11,Y+10, x+17,Y+8], false);
    }
    g.setPixel(x+4, y+7);
    g.setPixel(x+18, y+8);
  }
}};
