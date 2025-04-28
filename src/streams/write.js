import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_TO_WRITE = 'fileToWrite.txt';

const write = async () => {
    const filePath = path.join(__dirname, 'files', FILENAME_TO_WRITE);
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream); 
};

await write();