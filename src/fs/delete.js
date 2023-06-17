import {rm} from 'node:fs/promises';

const remove = async () => {
    // Write your code here
    try {
        const sourceFile = './src/fs/files/fileToRemove.txt'

        await rm(sourceFile);
       
    } catch (error) {
        console.log('FS operation failed')
    } 
};

await remove();