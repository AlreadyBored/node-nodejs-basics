import { writeFile } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const content = 'I am fresh and young';
    const savePath = path.join(__dirname, 'files', 'fresh.txt');

    await writeFile(savePath, content, { flag: 'wx' }, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await create();