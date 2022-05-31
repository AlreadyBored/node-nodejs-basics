import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const folder = path.resolve(path.dirname(''), 'src', 'fs', 'files');

export const list = async () => {
    fs.access(folder, function (error) {
        if (error) throwError();
        else {
            fsPromises.readdir(folder).
            then(files => {
                files.forEach(file => {
                    console.log(file);
                });
            })
        }
    });
};
function throwError() {
    try {
        throw new Error('FS operation failed');
    } catch (e) {
        console.log(e.message);
    }
}

list();