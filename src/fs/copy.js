import path from 'path';
import fs from 'fs';
import url from 'url';

const copy = async () => {
    const fileFolder = 'files';
    const fileFolderCopy = 'files_copy';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.access(path.join(__dirname, fileFolder), fs.constants.F_OK,(err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(path.join(__dirname, fileFolderCopy), fs.constants.F_OK,(err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.mkdir(fileFolderCopy, (err) => {
        if (err) {
            throw new Error(err.message);
        }

        fs.readdir(fileFolder, (err, files) => {
            if (err) {
                throw new Error(err.message)
            }

            files.forEach(item => {
                fs.copyFile(path.join(__dirname, fileFolder, item), path.join(__dirname, fileFolderCopy, item), (err) => {
                    if (err) {
                        throw new Error(err.message)
                    }
                });
            });
        });
    });
};

await copy();
