import { readFile} from 'fs/promises';
import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

    const content = await readFile(fileToReadPath, {encoding: 'utf8'}).catch(()=>{
        throw new Error('FS operation failed')
    })
    console.log(content);
};

await read();
