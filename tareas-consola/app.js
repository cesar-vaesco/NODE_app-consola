
require('colors');

const { inquirerMenu, pausa } = require('./helper/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {
    console.log('Hola mundo...');
    let opt = '';

    do {

        /* opt = await inquirerMenu();
        console.log({ opt }); */

        const tareas  = new Tareas();
         const tarea = new Tarea('Comprar comida');
        tareas._listado[tareas] = tarea;

         console.log(tareas);

        await pausa();
        /* if (opt !== 0) await pausa(); */

    } while (opt !== '0');

    //mostrarMenu();

}



main();
