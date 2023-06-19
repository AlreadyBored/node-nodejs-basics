import {readdir } from 'fs/promises';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const listPath = path.join(__dirname, 'files');
    const fileList = await readdir(listPath)
            .catch((error)=> {
            throw new Error('FS operation Failed')});
    console.log(fileList)
};

await list();
