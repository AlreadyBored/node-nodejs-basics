import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const dirPath = path.join(__dirname, 'files');
    const copyDirPath = path.join(__dirname, 'files_copy');


    if (!fs.existsSync(dirPath) || fs.existsSync(copyDirPath)) {
        throw new Error('FS operation failed');
    }

    fs.mkdirSync(copyDirPath, {recursive: true});

    fs.readdirSync(dirPath).forEach(fileName => {
        fs.copyFileSync(path.join(dirPath, fileName), path.join(copyDirPath, fileName));
    });
};

await copy();
