Bangle.on("charging", isCharging => {
  Bangle.setBacklight(1);
  if (isCharging) {
    let settings = require("Storage").readJSON("setting.json", true) || {};
    settings.quiet = 1;
    require("Storage").writeJSON("setting.json", settings);
    load("chargeanim.app.js");
  }
});
