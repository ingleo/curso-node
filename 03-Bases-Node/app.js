const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.blue(archivo)))
            .catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('comando no reconocido');
}

// console.log('limite', argv.limite)