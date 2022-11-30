import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {readFile} from 'fs/promises'
import { url } from 'inspector';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToTxt = path.join(__dirname, "files", 'fileToRead.txt');
    try {
    const txt = await readFile(pathToTxt, 'utf-8')
    console.log(txt)
        
    }
    catch (err) {
        console.log('ERROR FS operation failed ');
    }
};

await read();