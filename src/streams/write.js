import fs from 'fs';
import path from 'path';
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const toWrite = path.resolve(path.dirname(''), 'src', 'streams', 'files', 'fileToWrite.txt');

export const write = async () => {
    const stream = fs.WriteStream(toWrite, 'utf8');
    const rl = readline.createInterface({ input, output });


    rl.setPrompt('input> ');
    rl.prompt();
    rl.on('line', (line) => {
        stream.write(line);
        rl.prompt()
    });

    process.on('exit', (code) => {
        console.log(`${code === 0 ? '\n' : ''}Great! See you later :)`);
    });
};

write();