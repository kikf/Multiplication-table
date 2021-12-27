const {option, boolean, describe, demandOption} = require('yargs');
const { crearArchivo } = require('./ayudas/function');
const argv = require('./config/yargs');
var colors = require('colors');

crearArchivo( argv.b, argv.l, argv.m )
    .then( archivoNombre => console.log(archivoNombre.rainbow, 'create'.rainbow))
  .catch ( err => console.log(err)) 
