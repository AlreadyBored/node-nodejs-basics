import {rename as getRename } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const rename = async () => {

    try {
        await getRename(__dirname+'/files/wrongFilename.txt', __dirname+'/files/properFilename.md');
    }catch (e){
        throw new Error('FS operation failed');
    }

}
rename();