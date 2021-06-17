
require('colors');

const { guardarDB, leerDB } = require('./helper/guardarArchivo');
const {
    inquirerMenu,
    listadoTareasBorrar,
    pausa,
    leerInput,
    confirmar,
    mostrarListadoChecklist } = require('./helper/inquirer');

const Tareas = require('./models/tareas');


//console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) { //Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                tareas.listadoCompleto()
                /* console.log(tareas.listadoArr); */
                break;
            case '3':
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '5': // Completado |  pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('Estas seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada!'.red);
                    }

                }
                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();
        /* if (opt !== 0) await pausa(); */

    } while (opt !== '0');

    //mostrarMenu();

}

main();
