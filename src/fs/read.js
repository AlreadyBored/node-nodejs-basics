import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const read = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();