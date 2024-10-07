import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const file = path.join(__dirname, 'files','fresh.txt');
    const data = 'I am fresh and young';

    if (fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }

    fs.writeFileSync(file, data);
};

await create();