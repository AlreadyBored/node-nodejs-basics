import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';


const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    try {
        await fs.access(filePath)
    } catch (error) {
        throw new Error('FS operation failed');
    }
    await fs.rm(filePath, {recursive: true})
};

await remove();