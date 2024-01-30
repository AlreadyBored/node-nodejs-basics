import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function read() {
    const sourceFolderPath = join(__dirname, './files');
    const fileToRead = 'fileToRead.txt';
    const filePath = join(sourceFolderPath, fileToRead);

    try {
        await fsPromises.access(filePath);

        const fileContent = await fsPromises.readFile(filePath, 'utf-8');

        console.log('Content of fileToRead.txt:', fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: File not found.');
        } else {
            throw error;
        }
    }
}

readFileContent().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
