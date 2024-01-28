import { rename as renameFile } from 'node:fs/promises';

const errorMessage = 'FS operation failed';

const oldName = new URL('files/wrongFilename.txt', import.meta.url);
const newName = new URL('files/properFilename.md', import.meta.url);

const rename = async () => {

    try{
        await renameFile(oldName, newName);
        console.log('File \'wrongFilename.txt\' renamed');
    } catch (err) {
        throw new Error (errorMessage);
    }

};

await rename();