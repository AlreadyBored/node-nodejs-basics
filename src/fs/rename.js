import * as fs from 'node:fs';
import {resolve} from 'node:path';

const rename = async () => {
    const initPath = resolve('src', 'fs', 'files');

    fs.access(initPath + '/properFilename.md', (err) => {
        if (err && err.code === 'ENOENT') {
            fs.rename(initPath + '/wrongFilename.txt', initPath + '/properFilename.md', (err) => {
                if (err) throw new Error('FS operation failed');
            })
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await rename();