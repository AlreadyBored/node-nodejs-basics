import { cp, opendir } from 'node:fs';
import { resolve } from 'path';

const src = resolve('src', 'fs', 'files');
const dest = resolve('src', 'fs', 'files_copy');

const copy = async () => {
    opendir(src, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            opendir(dest, (err) => {
                if (!err) {
                    throw new Error('FS operation failed');
                } else {
                    cp(src, dest, {recursive: true}, (err) => {
                        if (err) {
                            throw new Error('FS operation failed');
                        }
                    });
                }
            })
        }
    })
};

copy();