import { promises as fsPromises, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileNameToRemove = 'fileToRemove.txt';
    const sourceFolderPath = path.join(__dirname, 'files');
    const filePathToRemove = path.join(sourceFolderPath, fileNameToRemove);

    // Check if the file exists
    try {
        await fsPromises.access(filePathToRemove, constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }
    
    // If the file exists, proceed with deletion
    await fsPromises.unlink(filePathToRemove);
    console.log('File removed successfully');

};

try {
    await remove();
} catch (error) {
    console.error(error.message);
}