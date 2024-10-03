
 // implement function that deletes file fileToRemove.txt 
 // (if there's no file fileToRemove.txt
 // Error with message FS operation failed must be thrown)

import { access, rm } from 'fs/promises'
const remove = async () => {
    try {
        await access('files/fileToRemove.txt')
        await rm('files/fileToRemove.txt')
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await remove();