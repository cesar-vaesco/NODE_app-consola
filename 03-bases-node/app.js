

const { crearArchivoTabla } = require('./helpers/multiplicar');

console.clear();

const base = 5;

crearArchivoTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
