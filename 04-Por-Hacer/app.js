const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");

console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case "listar":
    let listado = porHacer.getListado();
    console.log("======Por hacer======".yellow);
    for (let tarea of listado) {
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=====================".yellow);
    }
    break;

  case "actualizar":
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    if (actualizado) {
      console.log("Registro actualizado");
    } else {
      console.log("Registro no actualizado");
    }
    break;

  case "borrar":
    let borrado = porHacer.borrar(argv.descripcion);
    if (borrado) {
      console.log("Registro borrado");
    } else {
      console.log("Registro no borrado");
    }
    break;

  default:
    console.log("comando no reconocido");
}
