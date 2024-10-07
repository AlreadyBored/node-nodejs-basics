import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const target = __dirname + '\\fresh.txt';

    fs.readFile(target, (err, data) => {
        if (err?.code === 'ENOENT' && !data) {
            fs.writeFile(target, 'I am fresh and young', () => {});
        } else if (data) {
            throw Error ('FS operation failed');
        }
    });
};

await create();