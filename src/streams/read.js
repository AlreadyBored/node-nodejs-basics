import fs from "fs";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = fs.createReadStream(file, { encoding: 'utf-8' });

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (data) => {
        console.log(data);
    })
};

await read();