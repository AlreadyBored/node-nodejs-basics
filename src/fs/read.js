import {readFile} from "fs/promises";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const read = async () => {

    try {
        const text = await readFile(__dirname+'/files/fileToRead.txt','utf8');
        console.log(text);
    }catch (e){
        throw new Error('FS operation failed');
    }
};

read();