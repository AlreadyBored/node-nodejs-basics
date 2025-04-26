import { access, readFile } from 'node:fs/promises';

const read = async () => {
    const fileRead = 'src/fs/files/fileToRead.txt';
    try {
        await access(fileRead);
        const contents = await readFile(fileRead, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();