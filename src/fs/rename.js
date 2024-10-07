import fs from 'fs/promises'
import path from 'path'
import {getExecutedFileDirname} from "../../helpers.js";
const rename = async () => {
    const executedFileDirname = getExecutedFileDirname(import.meta.url);
    const wrongFileNamePath = path.join(executedFileDirname, 'files', 'wrongFilename.txt');
    const properFileNamePath = path.join(executedFileDirname, 'files', 'properFilename.txt');

    try {
        await fs.access(wrongFileNamePath);

        try {
            await fs.access(properFileNamePath);
            console.log('The file "properFilename.txt" is  already exists');
            throw new Error('FS operation failed');
        } catch (err) {
            if(err.code === 'ENOENT') {
                await fs.rename(wrongFileNamePath, properFileNamePath)
            } else  {
                throw err;
            }
        }
    } catch (error) {
        console.log('FS operation failed');
    }
};

await rename();
