import { readFile } from 'node:fs/promises';

const read = async () => {
    const fileToReadPath = new URL('./files/fileToRead.txt', import.meta.url);
    
    try {
        const fileContent = await readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(fileContent);
    } catch(_error) {
        console.log('FS operation failed');
    }
};

await read();