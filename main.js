
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';


const rl = readline.createInterface({ input, output });
const answer = await rl.question(
    'What do you think of Node.js? '
);

var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'exit')
            return rl.close();
        else if (answer == 'ls')
            console.log('LS')
        else {
            console.log('Invalid input')
        }
        recursiveAsyncReadLine();
    });
};

rl.on('close', () => {
    console.log('Thank you for using File Manager, Username!');
})

recursiveAsyncReadLine();


// rl.question('Type a command \n', (input) => {
//     if (input == 'cd') {
//         console.log('CD');
//     } else if (input == 'ls') {
//         console.log('ls');
//     }  else {
//         rl.setPrompt('Wrong command')
//     }
// })
// // rl.close();
// rl.on('close', () => {
//     console.log('We arescdsdc');
// })