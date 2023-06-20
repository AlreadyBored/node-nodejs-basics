import { renameSync } from "node:fs";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const fileOldPath = join(__dirname, 'files', 'wrongFilename.txt');
const fileNewPath = join(__dirname, 'files', 'properFilename.md');

const renameFile = (fileOldPath, fileNewPath) => {
    return new Promise((resolve, reject) => {
        renameSync(fileOldPath, fileNewPath);
        resolve();
    });
}

const rename = async () => {
    try {
        await renameFile(fileOldPath, fileNewPath);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();