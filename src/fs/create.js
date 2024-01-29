import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const filePath = path.join(process.cwd(), 'src/fs/files/fresh.txt');
    const text = 'I am fresh and young';

    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        await writeFile(filePath, text);
    } catch (err) {
        console.error(err);
    }
};

await create();
