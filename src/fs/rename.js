import fs from 'fs';

const checkIfFileExists = async (file_name) => {
    try {
        await fs.promises.access(file_name, fs.constants.R_OK);
        return true;
    }
    catch (e) {
        return false;
    }

}


const rename = async (current_name, new_name) => {
    const exists = checkIfFileExists(current_name);
    if (!exists) {
        throw new Error(`File ${current_name} does not exist`);
    }

    fs.rename(current_name, new_name, (err) => {
        if (err) {
            throw err.message;
        }
    })
};

await rename('./files/wrongFilename.txt',  './files/properFilename.md');

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)