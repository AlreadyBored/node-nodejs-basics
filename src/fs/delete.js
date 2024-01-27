import { unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files')

const remove = async () => {
    try {
        unlink(path.join(filesFolder, 'fileToRemove.txt'))
    } catch (error) {
        console.log(error);
    }
    
};

await remove();