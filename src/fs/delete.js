import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const filePath = 'files/fileToRemove.txt';
const messageOfError =  'FS operation failed';

const remove = async (fp, errorMessage) => {
    
    const errMessage = new Error(errorMessage);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteFilePath = path.join(__dirname, fp);

    try {
        await fs.unlink(absoluteFilePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw errMessage;    
        } else {
            console.error(err.message);
        }
    }
};

await remove(filePath, messageOfError);