import fs from 'fs';
import readline from 'readline';

export const transform = async () => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    rl.on('line', (result) => {
        console.log(`${result.split('').reverse().join('')}`);
      });
};

transform();
