import fsp from 'fs/promises';
export const read = async () => {
    try {
        const data = await fsp.readFile('files/fileToRead.txst', 'utf-8')
        console.log(data);
    }
    catch(e) {
        console.log(e);
        throw new Error('FS operation failed');
    }
};
read()