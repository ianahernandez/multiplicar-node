const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============================')

    console.log(`Tabla de multiplicar del ${base}`.green);

    console.log('===============================')

    if (!Number(base)) {
        console.log(`El valor introducido "${base}" no es un nùmero`);
        return;
    }
    if (!Number(limite)) {
        console.log(`El valor introducido "${limite}" no es un nùmero`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`);
            return
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}