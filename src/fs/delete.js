import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function remove() {
    const sourceFolderPath = join(__dirname, './files');
    const fileToRemove = 'fileToRemove.txt';
    const filePath = join(sourceFolderPath, fileToRemove);

    try {
        // Check if the file exists
        await fsPromises.access(filePath);

        // Delete the file
        await fsPromises.unlink(filePath);

        console.log('File deleted successfully.');
    } catch (error) {
        if (error.code === 'ENOENT') {
            // If the error is "not found", throw an error
            throw new Error('FS operation failed: File not found.');
        } else {
            // Propagate other errors
            throw error;
        }
    }
}

remove().catch((error) => {
    console.error(error.message);
    process.exit(1);
});