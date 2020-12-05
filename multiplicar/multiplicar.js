const fs = require('fs/promises');

const colors = require('colors/safe');

const listarTabla = (base, limite) => {
    for(let i = 0; i <= limite; i++){
        console.log((`${base} * ${i} = ${base * i } \n`)) 
    }
}

const crearTablas = ntablas => {
    
    for(let i = 1; i <= ntablas; i++){
        crearArchivo(i)
    }
   
}

let crearArchivo = base => {
    
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`Lo introducido ${base}, no es un número`);
            return;
        }
        let data = '';

        for(let i = 0; i <= 10; i++){
            data += (`${base} * ${i} = ${base * i } \n`)
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
            if(err){
                reject(err)
            }else{
                resolve(`tabla-${base}.txt`)
            }
        });
        
    });
}

module.exports = {crearArchivo, listarTabla, crearTablas}


