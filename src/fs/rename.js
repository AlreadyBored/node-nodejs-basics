import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';


const rename = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));

    const wrongFilenamePath = currentPath + '/files/wrongFilename.txt';
    const properFilenamePath = currentPath + '/files/properFilename.md';

    const isHaveFile = !fs.existsSync(wrongFilenamePath) || fs.existsSync(properFilenamePath);
    if (isHaveFile) {
        throw 'FS operation failed';
    }

    fs.rename(wrongFilenamePath, properFilenamePath, (err) => {
        if (err) {
            throw 'FS operation failed';
        }
    });
};

await rename();