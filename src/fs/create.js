import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { promises as fs } from 'node:fs';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const create = async () => {

    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';
    try {
        // open with write and exclusive flag
        const fd = await fs.open(filePath, 'wx');
        try{
            await fs.writeFile(fd, content);
        } finally {
            await fd.close();   
        }

    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }
};

await create();

