import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToRemove.txt'
const folderName = 'files'
const filePath = path.join(__dirname, folderName, fileName);

const remove = async () => {
    try {
        const fileExists = await fs.access(filePath)
                                    .then(() => true)
                                    .catch(() => false);
        if (!fileExists) {
        throw new Error('FS operation failed');
        }

        await fs.unlink(filePath);
        console.log('file deleted')
    } catch (error) {
        console.error(error.message);
    }

};

await remove();