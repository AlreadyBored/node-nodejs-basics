import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'fresh.txt');
    const fileContent = "I am fresh and young";
    const fileOptions = { flag: 'wx' };

    try {
        await writeFile(filePath, fileContent, fileOptions);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
