
const fs = require('fs');


const crearArchivoTabla = async (base = 5) => {

    try {

        console.log('=======================');
        console.log(`Tabla del ${base}`);
        console.log('=======================');

        let salida = '';

        for (let index = 1; index <= 10; index++) {

            salida += (`${base} * ${index} = ${base * index}\n`);

        }

        console.log(salida);

        fs.writeFileSync(`Tabla-${base}.txt`, salida,);

        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivoTabla
}
