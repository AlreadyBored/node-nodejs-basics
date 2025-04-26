import {access, cp, mkdir} from 'node:fs/promises';

const copy = async () => {
    const copyFolder = 'src/fs/files'; 
    const newFolder = 'src/fs/files_copy/';
    try {
        await access(copyFolder);
        await mkdir(newFolder);
    } catch (error) {
        throw new Error('FS operation failed');    
    }
    await cp(copyFolder,newFolder,{recursive:true})
};

await copy();
