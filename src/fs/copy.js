import fs from 'fs';

const checkIfDirExists = async (dirPath) => {
    try {
        await fs.promises.access(dirPath, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }

}


const copy = async (dest_dir, copy_name) => {

    const existsDestFolder = await checkIfDirExists(dest_dir);
    const existsCopyFolder = await checkIfDirExists(copy_name);

    if (!existsDestFolder) {
        throw new Error(`Could not find ${dest_dir}`);
    }
    if (existsCopyFolder) {
        throw new Error(` ${copy_name} already exists`);
    }
    fs.cp(dest_dir, copy_name, {recursive: true}, (err) => {
        if (err) throw err.message;
    })
};


await copy('files', 'files_copy');


// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exist or files_copy has already been created Error with message FS operation failed must be thrown)
