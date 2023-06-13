import path from 'path';
import fs from 'fs';
import url from 'url';

const remove = async () => {
    const fileFolder = 'files_copy';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.access(path.join(__dirname, fileFolder, 'fileToRemove.txt'), fs.constants.F_OK,(err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.unlink(path.join(__dirname, fileFolder, 'fileToRemove.txt'), () => {});

};

await remove();