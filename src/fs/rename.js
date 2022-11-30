import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathBeforeRename = path.join(__dirname, "files", "wrongFilename.txt");
    const pathAfterRename = path.join(__dirname, "files", "properFilename.md");
    fs.exists(pathBeforeRename, (isExists) => {
        if (!isExists) throw (`FS operation failed`);
    });
    fs.exists(pathAfterRename, (isExists) => {
        if (isExists) throw (`FS operation failed`);
    });
    fs.rename(pathBeforeRename, pathAfterRename, (err) => {
        if (err) throw err;
    })
};

await rename();