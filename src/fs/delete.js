import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const remove = async () => {
    const file = path.join(__dirname, 'files','fileToRemove.txt');
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    fs.unlinkSync(file);
};

await remove();