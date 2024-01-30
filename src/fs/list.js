import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function list() {
    const sourceFolderPath = join(__dirname, './files');
    const filesFolder = join(sourceFolderPath, 'files');

    try {
        await fsPromises.access(filesFolder);

        const fileNames = await fsPromises.readdir(filesFolder);

        console.log('List of filenames in the files folder:', fileNames);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: Files folder not found.');
        } else {
            throw error;
        }
    }
}

list().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
