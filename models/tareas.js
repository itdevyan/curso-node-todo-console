const Tarea = require("./tarea");

/**
 *
 *  _listado:
 * {
 *  'uuid-12312-123123-2: { id: 12, desc: asd, completadoEn: 12941}
 *  'uuid-12312-123123-2: { id: 12, desc: asd, completadoEn: 12941}
 *  'uuid-12312-123123-2: { id: 12, desc: asd, completadoEn: 12941}*
 * }
 *
 */

class Tareas {
  _listado = {};
  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
