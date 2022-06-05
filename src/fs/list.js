import {readdir} from 'fs';
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

export const list = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const file_dir_name = join(directory, 'files');
    await readdir(file_dir_name, (err, files) => {
        if (err) {
            throw new Error("FS operation failed")
        } else {
            files.forEach(file => console.log(file));
        }
    })
};

list();
