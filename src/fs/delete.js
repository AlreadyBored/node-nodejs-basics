import fsp from 'fs/promises';

export const remove = async () => {
    try{
        await fsp.unlink('files/fileToRemove.txt')
    }
    catch(e) {
        console.log(e);
        throw new Error('FS operation failed');

    }
}
remove()