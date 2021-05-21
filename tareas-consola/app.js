
require('colors');

const { inquirerMenu,
        pausa,
        leerInput } = require('./helper/inquirer');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {
    console.log('Hola mundo...');

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                //console.log(desc);
                tareas.crearTareas(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;


            default:
                break;
        }

        await pausa();
        /* if (opt !== 0) await pausa(); */

    } while (opt !== '0');

    //mostrarMenu();

}



main();
