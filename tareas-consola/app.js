
require('colors');

const { inquirerMenu } = require('./helper/inquirer');


console.clear();

const main = async () => {
    console.log('Hola mundo...');
    let opt = '';

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        /* if (opt !== 0) await pausa(); */

    } while (opt !== '0');

    //mostrarMenu();

}



main();
