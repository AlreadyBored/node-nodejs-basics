import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA = 'I am fresh and young';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(filePath, DATA, { flag: 'wx'});
    } catch(err) {
        console.error('FS operation failed');
    }
    
};

await create();