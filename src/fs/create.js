import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { open, mkdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const dir = join(__dirname, 'files');
    const filePath = join(dir, 'fresh.txt');
    let fileHandle;

    try {
        await mkdir(dir, { recursive: true });
        fileHandle = await open(filePath, 'wx');
        await fileHandle.writeFile('I am fresh and young');

    } catch (error) {
        throw new Error('FS operation failed');
        
    } finally {
        await fileHandle?.close();
    }
};

await create();