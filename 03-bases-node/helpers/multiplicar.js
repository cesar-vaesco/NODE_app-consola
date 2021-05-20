
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar = false) => {

    try {



        let salida = '';

        for (let index = 1; index <= 10; index++) {

            salida += (`${base} ${ 'x'.green } ${index} ${'='.green} ${base * index}\n`);

        }

        if (listar) {

            console.log('\n======================='.green);
            console.log('Tabla del:'.green,colors.blue(base));
            console.log('======================='.green);

            console.log(salida);
        }

        fs.writeFileSync(`Tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.rainbow;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivoTabla
}
