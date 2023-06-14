import path from 'node:path';
import {fileURLToPath} from 'url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    createReadStream(readFilePath).pipe(process.stdout); 
};

await read();