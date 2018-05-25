const fs = require('fs');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log('Archivo creado');
        });
    });
};