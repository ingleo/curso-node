const Tarea = require("./tarea");

/**
 * _listado:
 * { 'uuid-123: {id:12, desc: 'description', completadoEn:123123} '}
 */

class Tareas {
  _listado = {};

  get listadoArray() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    /*  let salidaLista = "";
    for (let i = 0; i < this.listadoArray.length; i++) {
      let indice = i + 1 + ".";
      salidaLista += `${indice.green} ${this.listadoArray[i].desc} :: ${
        this.listadoArray[i].completadoEn ? "Completado".green : "Pendiente".red
      }\n`;
    }
    return salidaLista;
    */

    this.listadoArray.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas) {
    console.log();
    const nuevoArray = this.listadoArray.filter((tarea) => {
      let esCompleta = tarea.completadoEn !== null ? true : false;
      return esCompleta === completadas;
    });

    nuevoArray.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? `${completadoEn}`.green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
