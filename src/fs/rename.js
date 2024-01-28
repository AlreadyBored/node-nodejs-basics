import {rename as fsRename, readFile } from 'fs/promises';

const rename = async () => {
    const fileToRename = 'src/fs/files/wrongFilename.txt';
    const fileWithNewName = 'src/fs/files/properFilename.md';
    let alreadyRenamed;

    try {
        alreadyRenamed = await readFile(fileWithNewName);
    } catch (e) {}

    try {
        if(alreadyRenamed) {
            throw error;
        }      
        await readFile(fileToRename);
        await fsRename(fileToRename, fileWithNewName);
    } catch(error) {
        console.error('FS operation failed');
    }
};

await rename();