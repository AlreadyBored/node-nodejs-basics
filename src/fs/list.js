import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const list = async () => {
    // Write your code here 
    const folderPath = path.join(__dirname, 'files');

    try {
        await fs.promises.access(folderPath);

        const files = await fs.promises.readdir(folderPath);
        console.log('List of filenames in the "files" folder:', files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();