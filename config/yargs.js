const colors = require('colors');

const opciones = {
    base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },
        ntablas: {
            alias: 'nt',
        }     
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opciones)
        
    .help()
    .argv;

module.exports = argv;