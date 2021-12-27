const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( base, lista = false, valorMaximo) => {
    try {
       
             let salida = '';

            console.clear();
        for(var i = 1; i <= valorMaximo; i++) {
            salida += ( ` ${ base } * ${ i } = ${ base * i }\n` );
    }

        if( lista ) {
            console.log('========================'.rainbow);
            console.log(`Multiplication table of`.rainbow, base);
            console.log('========================'.rainbow);
            console.log(salida.inverse)
            console.log('========================'.rainbow);
            console.log('========================'.rainbow);

        }

    
        

    fs.writeFileSync(`./salida/table-of-${ base }.txt`, salida)
    return ` Tabla del ${ base }`;



    } catch(err) {
        throw (err)
    }


   }


module.exports = { 
    crearArchivo,
}

