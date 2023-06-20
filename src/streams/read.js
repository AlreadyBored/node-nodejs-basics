import { createReadStream } from 'node:fs';
import process from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {

    try {
        const readStream = createReadStream(filePath);
        readStream.on('data', (chunk) => process.stdout.write(chunk.toString()))
    } catch (err) {
        console.error(err.message);
    }
};

await read();
