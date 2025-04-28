import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const create = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fresh.txt');

    try {
        // w - writing, if filePath doesn't exist - create; x - error if exists
        await fs.writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();