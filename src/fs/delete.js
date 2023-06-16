import { access, constants, unlink } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        // Check if the file exists
        await access(filePath, constants.F_OK);
        // File exists, proceed with deletion
        await unlink(filePath);
        console.log('File removed successfully!');
    } catch (error) {
        // File doesn't exist, throw an error
        throw new Error('FS operation failed');
    }
};

await remove();