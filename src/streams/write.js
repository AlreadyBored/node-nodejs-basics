import path from 'node:path';
import {fileURLToPath} from 'url';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const writeFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    process.stdin.pipe(createWriteStream(writeFilePath, {flags: 'a'})); 
};

await write();