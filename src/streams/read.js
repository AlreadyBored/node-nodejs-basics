import fs  from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          pathToFile = './files/fileToRead.txt',
          fullPathToFile = resolve(__dirname, pathToFile);
    const readableStream =  fs.createReadStream(fullPathToFile, 'utf8');

    readableStream.pipe(process.stdout);

    readableStream.on('open', () => {
        console.log('File is opened successfully');
    })

    readableStream.on('error', (readError) => {
        throw readError;
    });

};

await read();