import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { createReadStream } from 'node:fs';

const read = async () => {
    const pathToFile = '/files/fileToRead.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const readableStream = createReadStream(`${__dirname}${pathToFile}`, 'utf8');

    readableStream.on('data', (data) => {
        process.stdout.write(data);
    });

    readableStream.on('end', () => {
        console.log('\n');
    });

    readableStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
};

await read();