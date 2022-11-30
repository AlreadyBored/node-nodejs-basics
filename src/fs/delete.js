import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToRemove = path.join(__dirname, "files", "fileToRemove.txt");
    fs.exists(pathToRemove, (isExists) => {
        if (!isExists) throw (`FS operation failed`);
    });
    fs.unlink(pathToRemove, (err) => {
        if (err) throw err;
    })
};

await remove();