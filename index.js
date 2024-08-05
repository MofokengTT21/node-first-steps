import greet from './greet.js';
import yo from './yo.js';
import chalk from 'chalk'
import cowsay from 'cowsay'
import figlet from 'figlet';


console.log(greet('Tshepo'))
console.log(yo('Tshepo'))

const styleMessage = chalk.bgRed.whiteBright(greet('Tshepo'))


console.log(chalk.bgRed.whiteBright(greet('Tshepo')))

console.log(chalk.bgCyan.whiteBright(cowsay.say({
    text: greet('Tshepo')
})));

figlet('Hello, Tshepo', function(err,data){
    if (err){
        console.log('Something went wrong..');
        console.dir(err);
        return
    }
    console.log(data);
});