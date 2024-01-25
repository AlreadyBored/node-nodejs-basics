import fs from 'fs';

const copy = async () => {
    const folderPath = 'src/fs/files';
    const copyFolderPath = 'src/fs/files_copy';
    fs.access(folderPath, fs.constants.F_OK, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    fs.access(copyFolderPath, fs.constants.F_OK, (err) => {
        if (!err) throw new Error('FS operation failed');
    });
    fs.cp(folderPath, copyFolderPath, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

await copy();
