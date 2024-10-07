import path from 'node:path';
import fs from 'node:fs'

const errorMessage = console.log('FS operation failed');

const rename = async () => {

    const oldName = path.resolve('src', 'fs', 'files', 'wrongFilename.txt');
    const newName = path.resolve('src', 'fs', 'files', 'properFilename.md');

    fs.access(newName, (err) => {
        if (err) {
            fs.rename(oldName, newName, (err) => {
                if (err) {
                    errorMessage;
                    return;
                }
                console.log('File renamed');
            });
            return;
        }
        errorMessage;
    });


};

await rename();