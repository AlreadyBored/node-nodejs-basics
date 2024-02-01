import fs from 'fs';


const copy = async () => {
    fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err) console.error('FS operation failed');
    })
};

await copy();
