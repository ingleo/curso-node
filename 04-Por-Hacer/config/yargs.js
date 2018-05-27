const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Actualización de una tarea a completada o pendiente'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}