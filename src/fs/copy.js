import * as fs from 'fs/promises';
import { exist } from './exist.js';
import { FsError } from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const sourcePath = `${__dirname}/files`;
    const destPath = `${__dirname}/files_copy`;

    const sourceExist = await exist(sourcePath);

    if(!sourceExist) {
        throw new FsError()
    }

    try {
        await fs.mkdir(destPath);
        const files = await fs.readdir(sourcePath);
        await Promise.all(files.map((file) => {
            fs.copyFile(`${sourcePath}/${file}`, `${destPath}/${file}`, fs.constants.COPYFILE_EXCL)
        }))
    } catch (er) {
        throw new FsError();
    }

};

await copy();
