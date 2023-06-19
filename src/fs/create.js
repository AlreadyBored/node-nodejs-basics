import { open } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const ERROR_DESC = 'FS operation failed';
const TEXT = 'I am fresh and young';

const create = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const filePath = join(dir, 'files/fresh.txt');
    try {
        const file = await open(filePath, 'wx');
        await file.writeFile(TEXT);
    } catch {
        throw new Error(ERROR_DESC);
    }
};

await create();
