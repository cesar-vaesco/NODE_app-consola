

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


const getEmpleado = (id, callback) => {

    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${id} no existe`);

    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find((s) => s.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario del empleado registrado con ${id} no esta registrado`);
    }
}

/* console.log(getEmpleado(3));*/
const id = 5 ;


getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('Error....');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El empleado ${empleado.nombre} tiene un salario de: ${salario}`);

    });
});




/* getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log('Error....');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(empleado.nombre);
});

getSalario(10, (err, salario) => {
    if (err) {
        console.log('Error....');
        return console.log(err);
    }

    console.log('Salario existe');
    console.log(salario.salario);
})
 */
