import {createReadStream} from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';


const fileName = 'fileToRead.txt'
const folder = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, folder, fileName)

const read = async () => {
    const readStream = createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read();