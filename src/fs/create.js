import { appendFile } from 'node:fs/promises';

const data = 'I am fresh and young';
const path = 'src/fs/files/fresh.txt';
const errorMessage = 'FS operation failed';

const create = async () => {
    try{
        await appendFile(path, data, {flag: 'wx'});
        console.log('File \'fresh.txt\' created successfully');
    } catch (err) {
        throw new Error (errorMessage);
    }
};

await create();