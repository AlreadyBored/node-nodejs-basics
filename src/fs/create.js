import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const filePath = path.join(__dirname, 'files/fresh.txt');

    if (existsSync(filePath)) {
        throw new Error ('FS operation failed');
    }

    try {
        await fs.appendFile(filePath, 'I am fresh and young');
    } catch (err) {
        console.log(err);
    }
};

await create();
