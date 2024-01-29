import { promises as fsPromises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    // Check if the file already exists
    try {
        await fsPromises.stat(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        // If the file doesn't exist, create it with the specified content
        const fileContent = 'I am fresh and young\n';
        await fsPromises.writeFile(filePath, fileContent);
        
        console.error(error)
    }
};

await create();