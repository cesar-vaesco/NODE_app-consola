
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar = false, hasta = 1) => {

    try {



        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta; i++) {

            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);

        }

        if (listar) {

            console.log('\n======================='.green);
            console.log('Tabla del:'.green,colors.blue(base));
            console.log('======================='.green);

            console.log(consola);
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
