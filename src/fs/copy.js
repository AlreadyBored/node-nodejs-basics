import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const copy = async () => {
    try {
        let files = await fs.readdir(path.join(__dirname, './files'));
        let copy_dir = await fs.mkdir(path.join(__dirname, '/files_copy'), {recursive: true});

        files.forEach( file => {
            fs.copyFile(path.join(__dirname, './files', file), path.join(copy_dir, file));
        })
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

// copy();
