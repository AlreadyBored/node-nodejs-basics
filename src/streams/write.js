import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const write = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const stream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.on('data', (chunk) => {
        stream.write(chunk);
    });
};

await write();