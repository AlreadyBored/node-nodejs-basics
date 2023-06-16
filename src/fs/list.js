import { access, constants, readdir } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        // Check if the folder exists
        await access(folderPath, constants.F_OK);
        // Folder exists, read the files
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        // Folder doesn't exist, throw an error
        throw new Error('FS operation failed');
    }
};

await list();