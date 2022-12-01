import fs from 'fs';
import path from 'path';

const copy = async () => {
    // Write your code here
    //implement function that copies folder
    // files  with all its content into folder files_copy at the same level
    // (if files folder doesn't exists or files_copy has already been created
    // Error with message FS operation failed must be thrown)

    const from = path.resolve('src', 'fs', 'files')
    const to = path.resolve('src', 'fs', 'files_copy')

    try {
        if(!fs.existsSync(to)) {
            await fs.promises.cp(from, to, {recursive: true})
        } else {
            throw new Error('FS operation failed')
        }
    } catch (e) {
        throw e
    }
};

await copy();