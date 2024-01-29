import fs from "node:fs"
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const inPath = path.join(__dirname, 'files');
    const postfix = '_copy'
    const outPath = inPath + postfix;

    fs.cp(inPath, outPath, { force: false, errorOnExist: true, recursive: true }, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
