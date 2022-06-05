import { createWriteStream } from 'fs';
import readline from 'readline';

export const write = async () => {
    const writeStream = await createWriteStream('./files/fileToWrite.txt');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        writeStream.write(line)
    })
};
