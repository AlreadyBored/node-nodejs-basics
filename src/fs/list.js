import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
    const srcDir = path.join(process.cwd(), 'src/fs/files');

    if (!existsSync(srcDir)) {
        throw new Error('FS operation failed');
    }

    try {
        const files = await readdir(srcDir);
        files.map((file) => console.log(file));
    } catch (err) {
        console.error(err);
    }
};

await list();
