import { access, readFile } from 'fs/promises';


export const read = async () => {

    try {
        await access('./files/fileToRead.txt');
    } catch {
        throw new Error('FS operation failed');
    }
    
    try {
        const promise = readFile('./files/fileToRead.txt');
        const res = await promise
        console.log(res.toString());
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
