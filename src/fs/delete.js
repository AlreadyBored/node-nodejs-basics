import { unlink } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const deletedFileName = 'fileToRemove.txt';
    const deletedFile = path.join(__dirname, 'files', deletedFileName);

    unlink(deletedFile, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await remove();