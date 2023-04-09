import {createWriteStream} from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fileToWrite.txt'
const folder = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, folder, fileName)


const write = async () => {
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();