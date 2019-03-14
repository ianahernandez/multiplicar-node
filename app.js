//Requires

//Tipos de require
//Existente en node (documentacion) por ser nativo
//const fs = require('fs');

//NO existe en la documentacion de node (Paquete que se instala)
//const fs = require('express');

//Creados por el usuario
//const fs = require('./fs');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`El archivo ${colors.green(archivo)} se ha creado exitosamente!`)
        }).catch(err =>
            console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let base = 'a';
//Parametros desde la terminal

//let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];