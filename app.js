const argv = require('./config/yargs');
const colors = require('colors');

const {crearArchivo, listarTabla, crearTablas} = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(resp => console.log(`Archivo creado: ${resp}`))
            .catch(err => console.log(err));
        break;
    case 'crearTablas':
        crearTablas(argv.ntablas)
        break;
    default:
        console.log('Comando no reconocido')
}
