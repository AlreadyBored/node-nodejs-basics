import { readdir, readFile, access } from 'fs/promises';
const list = async () => {
    const fileToRead = './fileToRead.txt';
    try {
        try {
            await access(fileToRead);
        } catch (error) {
            throw new Error('FS operation failed');
        }
        const content = await readFile(fileToRead, 'utf-8');
        console.log('File content:');
        console.log(content);
    } catch (error) {
        console.error(error.message);
    }
};

await list();
