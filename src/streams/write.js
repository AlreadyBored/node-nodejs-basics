import fs from 'fs';
import path from 'path';
import url from 'url';

const write = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const file = path.join(path.dirname(__filename), 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(file);

    process.stdin.once('data', (userInput) => {
        writeStream.write(userInput, () => {
            console.log('Your input was succesfully written');

            writeStream.end();
            process.exit();
        });
    });

    writeStream.on('error', (error) => {
        console.error('Error while writing to file:', error);
    });
};

await write();