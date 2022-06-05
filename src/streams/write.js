import fs from 'fs';
import readline from 'readline';

export const write = async () => {
    const writeStream = fs.createWriteStream('./files/fileToWrite.txt');
    const data = await getLine();
    writeStream.write(data);
    writeStream.destroy();
};

async function getLine() {
    const readLineFromConsole = readline.createInterface({
        input: process.stdin,
    });

    return new Promise(resolve => readLineFromConsole.on('line', data => {
        readLineFromConsole.close();
        resolve(data);
    }));
}

await write();