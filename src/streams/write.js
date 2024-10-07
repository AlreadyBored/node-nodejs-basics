import { fileURLToPath } from 'url';
import path from 'path';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    // Write your code here 
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();