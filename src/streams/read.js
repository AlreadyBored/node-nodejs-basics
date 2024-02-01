// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const result = '';
    const readable = createReadStream(fileToReadPath);
    readable.on('redable', (chunck) => {
        result += chunck;
    })
    readable.on('end', () => console.log(result));
    readable.pipe(process.stdout);
};

await read();