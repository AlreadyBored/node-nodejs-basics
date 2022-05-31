import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve(path.dirname(''), 'src', 'fs', 'files', 'fileToRemove.txt');

export const remove = async () => {
    fs.access(filePath, async function (error) {
        if (error) throwError();
        else {
            await fsPromises.unlink(filePath);
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

remove();