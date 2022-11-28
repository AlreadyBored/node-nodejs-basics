import * as fs from 'fs';

const copy = async () => {
    fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, (err) => {
        if (err) {
            console.log("FS operation failed", err);
        }
    });
};

copy();