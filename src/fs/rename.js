import fs from 'fs';
import { resolve } from 'path';

const oldPath = resolve('src', 'fs', 'files', 'wrongFilename.txt');
const newPath = resolve('src', 'fs', 'files', 'properFilename.txt');

const rename = async () => {
    fs.open(oldPath, 'r', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.open(newPath, 'r', (err) => {
                if (!err) {
                    throw new Error('FS operation failed');
                } else {
                    fs.rename(oldPath, newPath, (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                }
            });
        }
    });
};

await rename();