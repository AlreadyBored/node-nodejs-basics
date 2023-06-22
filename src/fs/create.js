import fs from 'fs/promises';
import path from 'path';

const file = path.resolve('src', 'fs', 'files', 'fresh.txt');
const text = 'I am fresh and young';

const create = async () => {
    // Write your code here
    try {
        await fs.writeFile(file, text, {flag: 'wx'});
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await create();