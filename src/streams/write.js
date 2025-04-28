import fs  from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          pathToFile = './files/fileToWrite.txt',
          fullPathToFile = resolve(__dirname, pathToFile);
    const writableStream =  fs.createWriteStream(fullPathToFile);

    process.stdin.pipe(writableStream);

    writableStream.on('end', () => {
        console.log('File is changed successfully');
    })

    writableStream.on('error', (readError) => {
        throw readError;
    });
    
};

await write();