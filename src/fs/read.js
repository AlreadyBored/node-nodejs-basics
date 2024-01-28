import { readFile } from 'node:fs/promises';

const errorMessage = 'FS operation failed';

const filePath = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
    try{
        const fileContent = await readFile(filePath, 'utf8');
        console.log(fileContent);
    } catch (err) {
        throw new Error (errorMessage);
    }
};

await read();