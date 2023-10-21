Bangle.on("charging", isCharging => {
  Bangle.setBacklight(1);
  if (isCharging) load("chargeanim.app.js");
});
