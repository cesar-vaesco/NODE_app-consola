
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'base para generar tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra tabla de multiplicar'
    })
    .check((argv, options) => {
        //console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }

        return true;
    })
    .argv;


module.exports = argv;
