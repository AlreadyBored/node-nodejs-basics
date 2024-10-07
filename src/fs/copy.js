import fs from 'fs';

const copy = async () => {
    fs.cp('./files', './files_copy', { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err?.code === 'ERR_FS_CP_EEXIST' || err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        }        
    });
};

await copy();
