import {createReadStream} from 'fs';
import path from "path";

const read = async () => {
    await new Promise((resolve) => {
        const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
        const readStream = createReadStream(path.resolve(filePath), 'utf-8');

        readStream.on('data', (chunk) => {
            process.stdout.write(chunk + '\n');
        });

        readStream.on('error', (err) => {
            console.error(`Error reading the file: ${err.message}`);
        });

        readStream.on('end', () => {
            resolve()
        })
    });
};

await read();
