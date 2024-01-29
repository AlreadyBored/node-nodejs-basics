import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const textFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await fs.writeFile(textFile, 'I am fresh and young',{ flag: 'ax' })
    } catch {
        throw new Error('FS operation failed')
    }
};

await create();