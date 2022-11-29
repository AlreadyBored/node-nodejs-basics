import { unlink } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    // Write your code here 
    const prUnlink = promisify(unlink);
    const pathToDeleteFile = `${__dirname}/files/fileToRemove.txt`;
    try {
        await prUnlink(pathToDeleteFile)
    }
    catch (err) {
        throw new Error('FS operation failed'); 
    }
};

await remove();