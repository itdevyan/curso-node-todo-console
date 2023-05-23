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

  crearTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    // segundo argumento forEach es indice
    Object.keys(this._listado).forEach((key, index) => {
      const tarea = this._listado[key];
      if (tarea.compleatoEn) {
        console.log(
          `${index + 1}. `.green + `${tarea.desc} :: ${"Completada".green}`
        );
      } else {
        console.log(
          `${index + 1}. `.red + `${tarea.desc} :: ${"Pendiente".red}`
        );
      }
    });
  }
}

module.exports = Tareas;
