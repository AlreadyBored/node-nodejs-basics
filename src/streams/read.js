import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const read = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const stream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'));
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
    stream.on('close', () => {
        process.stdout.write('End of reading');
    })
};

await read();