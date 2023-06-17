import {appendFile} from 'node:fs/promises';

const create = async () => {
    // Write your code here 
    try {
        const options = {
            encoding: 'utf8',
            flag: 'ax'
        }
        await appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', options);
    } catch (error) {
        console.log('FS operation failed');
    }
};

await create();