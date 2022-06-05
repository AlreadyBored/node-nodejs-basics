import fs from 'fs';

export const copy = async () => {
    if (!fs.existsSync('./files') || fs.existsSync('./files_copy')) {
        throw new Error('FS operation failed');
    }

    fs.mkdir('./files_copy', err => {
        if (err) throw err;
    });

    fs.cp('./files', './files_copy', {recursive: true},err => {
        if (err) throw err;
    });
};

await copy();