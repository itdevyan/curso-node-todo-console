const { v4: uudiv4 } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  compleatoEn = null;

  constructor(desc) {
    this.id = uudiv4();
    this.desc = desc;
    this.compleatoEn = null;
  }
}

module.exports = Tarea;
