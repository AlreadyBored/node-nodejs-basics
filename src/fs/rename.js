import path from 'path';
import fs from 'fs';
import url from 'url';

const rename = async () => {
    const fileFolder = 'files_copy';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.access(path.join(__dirname, fileFolder, 'wrongFilename.txt'), fs.constants.F_OK,(err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(path.join(__dirname, fileFolder, 'properFilename.md'), fs.constants.F_OK,(err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.rename(path.join(__dirname, fileFolder, 'wrongFilename.txt'), path.join(__dirname, fileFolder, 'properFilename.md'),() => {});
};

await rename();