import fs from 'fs';
import readline from 'readline';

export const write = async () => {
    const writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt')

    var rl = readline.createInterface({
        input: process.stdin,
        output: writeStream,
        terminal: false
    });
  
    rl.on('line', (result) => {
        writeStream.write(result);
    });
};

write();
