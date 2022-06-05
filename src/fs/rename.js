//execute: node src/fs/rename
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const oldPath = path.resolve(path.dirname(''), 'src', 'fs', 'files', 'wrongFilename.txt');
const newPath = path.resolve(path.dirname(''), 'src', 'fs', 'files', 'properFilename.md');

export const rename = async () => {
    fs.access(oldPath, function (error) {
        if (error) {try{throw new Error('FS operation failed')} catch(error){console.log(error.message)}}
        else {
            fs.access(newPath, async function (error) {
                if (error) {
                    await fsPromises.rename(oldPath, newPath);
                } else {try{throw new Error('FS operation failed')} catch(error){console.log(error.message)}}
            });
        }
    });
};

rename();