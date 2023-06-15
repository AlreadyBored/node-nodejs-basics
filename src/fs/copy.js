/**
 * copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists
 * or files_copy has already been created Error with message FS operation failed must be thrown)
 */

/**
 * create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
 * copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
 *
 * read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
 */

import * as fs from 'fs/promises';
import { exist } from './exist.js';
import { FsError } from './fs-error.js';

const copy = async () => {
    const sourcePath = 'src/fs/files';
    const destPath = 'src/fs/files_copy';

    const sourceExist = await exist(sourcePath)
    const destExist = await exist(destPath)

    if(!sourceExist || destExist) {
        throw new FsError()
    }

    await fs.mkdir(destPath);

    const files = await fs.readdir(sourcePath);
    files.forEach((file) => {
        fs.copyFile(`${sourcePath}/${file}`, `${destPath}/${file}`, fs.constants.COPYFILE_EXCL);
    });
};

await copy();
