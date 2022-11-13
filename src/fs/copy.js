import fs from 'fs';
import { readdir, copyFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const copy = async () => {
    try{
        const src = path.resolve(__dirname,  'files')
        const dest = path.resolve(__dirname, 'files_copy')
        if(fs.existsSync(dest) || !fs.existsSync(src)) throw Error('FS operation failed')
        await mkdir(dest);
        const list = await readdir(src);
        list.forEach(fileName => {
            copyFile(path.resolve(src, fileName),path.resolve(dest, fileName))
        })
    } catch(e) {
        console.log(e.message);
    }
};

copy();