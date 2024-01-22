import { createWriteStream } from 'node:fs';
import process from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

    try {
        const writeStream = createWriteStream(filePath);
        process.stdin.on('data', (chunk) => writeStream.write(chunk.toString()) );
    } catch (err) {
        console.error(err.message);
    }
};

await write();