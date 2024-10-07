import fs from 'fs/promises';
import path from 'path';
import {getExecutedFileDirname} from "../../helpers.js";
const list = async () => {
    try {
        const filesFolderPath = path.join(getExecutedFileDirname(import.meta.url), 'files');
        const files = await fs.readdir(filesFolderPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
