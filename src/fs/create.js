import fs from 'node:fs/promises';

// create.js - implement function that creates new file fresh.txt 
// with content I am fresh and young inside of the files folder 
// (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
    // Write your code here
    const path = './files/fresh.txt';
    const phraseToWrite = 'I am fresh and young';
    
    try {
        await fs.access(path);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(path, phraseToWrite);
            console.log('Saved');
        } else {
            console.error(err);
        }
    }
};

await create();
