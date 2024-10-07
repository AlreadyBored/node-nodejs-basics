import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const copy = async () => {
    const currentFilePath = path.join(__dirname, 'files');
    const copyFilePath = path.join(__dirname, 'files_copy');

    if (!fs.existsSync(currentFilePath)) {
        throw new Error('FS operation failed')
    }

    if (fs.existsSync(copyFilePath)) {
        throw new Error('FS operation failed')
    }

    fs.mkdirSync(copyFilePath);

    const recursiveCopy = (fromPath, toPath) => {
        fs.readdirSync(currentFilePath, {withFileTypes: true}).forEach((paths) => {
            const currentFilePath = path.join(fromPath, paths.name);
            const copyFilePath = path.join(toPath, paths.name);

            if (paths.isDirectory()) {
                fs.mkdirSync(currentFilePath);
                recursiveCopy(currentFilePath,copyFilePath)
            } else {
                fs.copyFileSync(currentFilePath,copyFilePath)
            }
        })
    }

    recursiveCopy(currentFilePath, copyFilePath)

};

await copy();
