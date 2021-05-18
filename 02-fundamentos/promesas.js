const empleados = [
    {
        id: 1,
        nombre: 'César'
    },
    {
        id: 2,
        nombre: 'Vero'
    },
    {
        id: 3,
        nombre: 'Gloria'
    }];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1200
    }];


/* const getEmpleado = (id, callback) => {

    const promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id);

        if(empleado){
            resolve(empleado)
        }else {
            reject(`El empleado con id ${id} no existe`);
        }
    });

    return promesa;
} */

const getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado ? resolve(empleado)
                 : reject(`El empleado con id ${id} no existe`);

        /* if (empleado) {
            resolve(empleado)
        } else {
            reject(`El empleado con id ${id} no existe`);
        } */
    });


}

const getSalario = (id, callback) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        salario ? resolve(salario)
                : reject(`El empleado con id ${id} no tiene salario registrado`);
    })
}

const id = 3;
let nombre;

getEmpleado(id)
    .then( empleado =>{
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => {
        console.log('El empleado:', nombre, 'tiene un salario de:', salario);
    })
    .catch(err => console.log(err))


/* getEmpleado(id)
.then(empleado => {
    getSalario(id)
    .then(salario =>{
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })
        .catch(err => console.log(err));
})
.catch(err => console.log(err));
*/


/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
 */
