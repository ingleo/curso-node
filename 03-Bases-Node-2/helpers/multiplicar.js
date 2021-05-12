const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listar, hasta = 10) => {
  try {
    let salida, consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".yellow} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("================".green);
      console.log("Tabla del".green, colors.blue(base));
      console.log("================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
