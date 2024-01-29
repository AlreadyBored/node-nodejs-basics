import { promises as fsPromises, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceFolderPath = path.join(__dirname, 'files');
    const destinationFolderPath = path.join(__dirname, 'files_copy');

    // Check if the source folder exists
    try {
        await fsPromises.access(sourceFolderPath, constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    // Check if the destination folder already exists
    try {
        await fsPromises.access(destinationFolderPath, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        // If the destination folder doesn't exist

        /*'ENOENT': This is a specific error code that stands for "Error NO ENTry".
        It indicates that a file or directory does not exist.*/
        if (error.code === 'ENOENT') {
            await fsPromises.mkdir(destinationFolderPath);

            const files = await fsPromises.readdir(sourceFolderPath);

            for (const file of files) {
                const sourceFile = path.join(sourceFolderPath, file);
                const destinationFile = path.join(destinationFolderPath, file);

                await fsPromises.copyFile(sourceFile, destinationFile);
            }

            console.log('Folder copied successfully');
        } else {
            throw error;
        }
    }
};

try {
    await copy();
} catch (error) {
    console.error(error.message);
}
