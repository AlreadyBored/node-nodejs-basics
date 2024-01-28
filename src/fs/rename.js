import { renameSync, existsSync } from 'fs';

const rename = async () => {
    const fileWhatRename = './files/wrongFilename.txt';
    const fileToRename = './files/properFilename.md';
    if (!existsSync(fileWhatRename) || existsSync(fileToRename)) {
        console.error("FS operation failed")
    } else {
        renameSync(fileWhatRename, fileToRename);
    }
};

await rename();

/*
* rename.js - implement function that renames file
* wrongFilename.txt to properFilename with extension
* .md (if there's no file wrongFilename.txt or
* properFilename.md already exists Error with message
* FS operation failed must be thrown)
*/
