
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();


//console.log(argv);



crearArchivoTabla(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'.rainbow))
    .catch(err => console.log(err));
