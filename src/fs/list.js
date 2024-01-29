import { readdir } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const readDir = path.join(__dirname, 'files');

    readdir(readDir, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files);
        }
    })
};

await list();