import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const list = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const dirPath = join(__dirname, 'files');

    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();