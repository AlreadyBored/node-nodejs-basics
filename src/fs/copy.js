import path from 'node:path';
import fs from 'node:fs';
import fsPromises from 'fs/promises';
import { getDirName } from './getDir.js';

const copy = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files');
    const filePathDestination = path.join(getDirName(import.meta.url), './files-copy');

    if (!fs.existsSync(filePath) || fs.existsSync(filePathDestination)) {
        throw Error('FS operation failed');
    }

    return fsPromises.mkdir(filePathDestination)
        .then(() => fsPromises.readdir(filePath, {withFileTypes: true}))
        .then((list) => Promise.all(list.map(el => {

            return fsPromises.copyFile(path.join(el.path, el.name), path.join(filePathDestination, el.name))

        })))
};


await copy();

