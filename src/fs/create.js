import fs from 'fs/promises';
import path from 'path';
import { isExist } from "../utils/helpers.js";
const __dirname = path.dirname(process.argv[1]);

export const create = async () => {
    const isFileExist = await isExist(path.join(__dirname, './files', 'fresh.txt'));
    if ( isFileExist) {
        throw new Error('FS operation failed')
    }

    fs.writeFile(path.join(__dirname, './files', 'fresh.txt'), 'I am fresh and young');
};

// create();