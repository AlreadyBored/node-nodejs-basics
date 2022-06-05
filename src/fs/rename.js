import { access, rename as renameFile } from 'fs/promises'

const RENAME_ERROR_MESSAGE = 'FS operation failed';
const OLD_PATH = 'files/wrongFilename.txt';
const NEW_PATH = 'files/properFilename.md';

export const rename = async () => {
    try {
        await access(NEW_PATH);

        throw new Error(RENAME_ERROR_MESSAGE)
    } catch(err) {
        if (err.name !== 'RenameError') { 
            try {
                await renameFile(OLD_PATH, NEW_PATH);
            } catch {
                throw new Error(RENAME_ERROR_MESSAGE)
            }
        } else {
            throw err;
        }
    }
};

rename()

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
