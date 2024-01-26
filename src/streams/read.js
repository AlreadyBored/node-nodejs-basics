import { promises as fsPromises, createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    const fileSourcePath = path.join(__dirname, 'files', 'fileToRead.txt')

    const fileReadStream = createReadStream(fileSourcePath)

    //print data to process.stdout
    fileReadStream.on('data', (item) => {
        process.stdout.write(item);
    });

    //event listener to handle any errors during reading
    fileReadStream.on('error', (err) => {
        console.error('Error reading file:', err);
    });

};

await read();