import { isExist } from "../utils/helpers.js";
import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const rename = async () => {
    const isWrongExist = await isExist(path.join(__dirname, './files', 'wrongFilename.txt'))
    const isProperExist = await isExist(path.join(__dirname, './files', 'properFilename.md'))

    if(!isWrongExist || isProperExist) {
        throw new Error('FS operation failed')
    }

    fs.rename(path.join(__dirname, '/files/', 'wrongFilename.txt'), path.join(__dirname, '/files/', 'properFilename.md'))
};

// rename()