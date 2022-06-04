import fsp from 'fs/promises';

export const list = async () => {
    try{
        const list = await fsp.readdir('files')
        console.log(list);
    }
    catch (e) {
        console.log(e);
        throw new Error('FS operation failed');
    }
    // Write your code here
};
list()