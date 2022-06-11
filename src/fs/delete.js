import { rm } from 'fs/promises';

export const remove = async () => {
    try {
        rm('./files/fileToRemove.txt');
    }catch (e){
        throw new Error('FS operation failed');
    }
};
 remove();
