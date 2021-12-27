const {option} = require('yargs');

const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,

        })
        .check(( argv, option) => {
                if( isNaN( argv.b ) ) {
                    throw 'Base is a number';
                }
            return true;
        })
        .option('l', {
            alias: 'lista',
            default: false,
            type: 'boolean',
            demandOption: true,
            desc: 'Write the table on console ',
        })
    .option('m', {
        alias: 'maximo',
        type: 'number',
        default: 10,
        demandOption: true,
        desc: 'How many times do you want to multiply'
    })

    .check(( argv, option) => {
        if( isNaN(argv.m)){
            throw 'This is a number.';       
        } 
        return true;
    })
        .argv;

module.exports = argv;
