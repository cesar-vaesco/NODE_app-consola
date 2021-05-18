


/* setTimeout(() => {
    console.log('Hola mundo con timeout');
}, 3000); */


const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: 'César'
    }

    setTimeout(() => {
        callback(usuario);

    }, 1500);

}


getUsuarioByID(10, (usuario) => {
    console.log(usuario);
    console.log(usuario.nombre.toUpperCase());
});
