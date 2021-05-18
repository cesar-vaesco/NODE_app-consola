
const fs = require('fs');

console.clear();

const base = 15;
console.log('=======================');
console.log(`Tabla del ${base}`);
console.log('=======================');


let salida = '';

for (let index = 1; index <= 10; index++) {

    salida += (`${base} * ${index} = ${base * index}\n`);

}

console.log(salida);

fs.writeFile(`Tabla del ${base}`, salida, (err) => {

    if (err) {
        throw err;
    }
    console.log(`Tabla del ${base} creada...`);
})
