import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const list = async () => {

    const files = fs.readdirSync(path.join(__dirname, 'files'));

    if (!files) {
        throw new Error('FS operation failed');
    }

    console.log(files);
};

await list();