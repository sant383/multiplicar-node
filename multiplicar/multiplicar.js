const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {

    console.log('*****************'.red);
    console.log(`tabla de ${base}`.blue);
    console.log('================='.white);
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`)
    }

};



let crearArchivo = (base, limite) => {



    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }


        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log(colors.green('El archivo ha sido grabado'));
        });



    });
}

module.exports = {
    crearArchivo,
    listarTabla
}