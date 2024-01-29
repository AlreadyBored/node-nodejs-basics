import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import pr from 'node:process';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = fs.createReadStream(fileToReadPath);

    readStream.on('data', (chunk) => {
        pr.stdout.write(chunk);
    })

    readStream.on('error', (err) => {
        console.error('*** Error reading file ***', err);
    })
};

await read();