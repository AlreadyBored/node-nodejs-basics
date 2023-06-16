import { access, constants, rename as renameFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destinationFilePath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        // Check if the source file exists
        await access(sourceFilePath, constants.F_OK);

        // Check if the destination file exists
        try {
            await access(destinationFilePath, constants.F_OK);
            // Destination file already exists, throw an error
            throw new Error('FS operation failed');
        } catch (error) {
            // Destination file doesn't exist, proceed with renaming
            if (error.code === 'ENOENT') {
                await renameFile(sourceFilePath, destinationFilePath);
                console.log('File renamed successfully!');
            } else {
                throw new Error('FS operation failed');
            }
        }
    } catch (error) {
        // Source file doesn't exist, throw an error
        throw new Error('FS operation failed');
    }
};

await rename();