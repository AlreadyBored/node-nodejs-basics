import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    if (
        fs.existsSync(path.join(__dirname, 'files', "properFilename.md"))
        || !fs.existsSync(path.join(__dirname, 'files', "wrongFilename.txt"))
    ) {
        throw new Error('FS operation failed');
    }

    fs.renameSync(path.join(__dirname, 'files', "wrongFilename.txt"), path.join(__dirname, 'files', "properFilename.md"))
};

await rename();
