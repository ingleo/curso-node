const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla de multiplicar",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: true,
      describe: "Número hasta donde llega tabla",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
      throw "Hasta tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
