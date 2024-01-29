import { promises as fsPromises, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceFolderPath = path.join(__dirname, 'files');

    // Check if the folder exists
    try {
        await fsPromises.access(sourceFolderPath, constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    // Read the list of filenames in the folder
    const files = await fsPromises.readdir(sourceFolderPath);

    const listArray  = [];

    files.forEach((file) => {
        listArray.push(file)
    });

    console.log('Filenames in the "files" folder:', listArray);
};

try {
    await list();
} catch (error) {
    console.error(error.message);
}