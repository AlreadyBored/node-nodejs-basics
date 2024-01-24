import { promises as fsPromises, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFileName = 'wrongFilename.txt';
    const destinationFileName = 'properFilename.md';

    const sourceFolderPath = path.join(__dirname, 'files');

    const oldPath = path.join(sourceFolderPath, sourceFileName)  
    const newPath = path.join(sourceFolderPath, destinationFileName)

    // Check if the source file exists
    try {
        await fsPromises.access(oldPath, constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    // Check if the destination file already exists
    try {
        await fsPromises.access(newPath, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fsPromises.rename(oldPath, newPath);
            console.log('File renamed successfully');
        } else {
            throw error;
        }
    }
};

try {
    await rename();
} catch (error) {
    console.error(error.message);
}