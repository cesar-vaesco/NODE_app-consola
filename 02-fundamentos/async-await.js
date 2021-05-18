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

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado ? resolve(empleado)
            : reject(`El empleado con id ${id} no existe`);

    });


}

const getSalario = (id, callback) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        salario ? resolve(salario)
            : reject(`El empleado con id ${id} no tiene salario registrado`);
    })
}


const getInfousuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de $ ${salario}`;

    } catch (error) {

        throw error;
    }

}

const id = 1;

getInfousuario(id)
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL')
        console.log(err)
    })
