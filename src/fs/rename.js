import fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const basePath = path.join(__dirname, 'files');
    const oldPath = path.join(basePath, 'wrongFilename.txt');
    const newPath = path.join(basePath, 'properFilename.md');

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await rename();