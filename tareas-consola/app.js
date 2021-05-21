
require('colors');

const { inquirerMenu,
        pausa,
        leerInput } = require('./helper/inquirer');

const Tareas = require('./models/tareas');


//console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {

        //Función que imprime el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                //console.log(desc);
                tareas.crearTareas(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
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
