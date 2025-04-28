import fs from 'node:fs';
import path from 'path';

const rename = async () => {
    const oldPath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(import.meta.dirname, 'files', 'properFilename.md');

    fs.access(newPath, fs.constants.R_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else if (err && err.code === 'ENOENT') {
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
            })
        }
    })

};

await rename();