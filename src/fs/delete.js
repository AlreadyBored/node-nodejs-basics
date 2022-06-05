import {unlink} from 'fs';
import {fileURLToPath} from 'url';
import {join, dirname} from 'path';

export const remove = async () => {
    const remove_file_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');
    await unlink(remove_file_name, (err) => {
        if (err) throw  new Error("FS operation failed")
    })
};

remove();
