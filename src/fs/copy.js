import fs from 'fs';
import path from 'path';

export const copy = async () => {
    const exists = fs.existsSync('./src/fs/files_copy', () => {});
    
    if (!exists) {
        fs.mkdirSync('src/fs/files_copy');
        fs.readdirSync('./src/fs/files').forEach(element => {
            if (fs.lstatSync(path.join('./src/fs/files', element)).isFile()) {
                fs.copyFileSync(path.join('./src/fs/files', element), path.join('src/fs/files_copy', element));
            } else {
                copyFolderSync(path.join('./src/fs/files', element), path.join('src/fs/files_copy', element));
            }
        });
    } else {
        throw new Error('FS operation failed');
    }
};


// copy()
