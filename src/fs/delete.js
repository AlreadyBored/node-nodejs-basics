import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const filePath = path.join(__dirname, 'files/fileToRemove.txt');

    if (!existsSync(filePath)) {
        throw new Error ('FS operation failed');
    }

    try {
        await fs.unlink(filePath);
    } catch (err) {
        console.log(err);
    }
};

await remove();
