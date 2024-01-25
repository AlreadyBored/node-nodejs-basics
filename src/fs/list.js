import fs from 'fs';

const list = async () => {
    const folderPath = 'src/fs/files';
    fs.access(folderPath, fs.constants.F_OK, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;
        files.forEach(file => { console.log(file); });
    });
};

await list();
