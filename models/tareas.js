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

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  listadoCompleto() {
    console.log();
    // segundo argumento forEach es indice
    Object.keys(this._listado).forEach((key, index) => {
      const tarea = this._listado[key];
      if (tarea.completadoEn) {
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

  listarPendientesCompletados(completadas = true) {
    let listado = [];
    if (completadas) {
      listado = this.listadoArr.filter((tarea) => tarea.completadoEn);
    } else {
      listado = this.listadoArr.filter((tarea) => !tarea.completadoEn);
    }
    console.log();
    listado.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? `${completadoEn}`.green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
