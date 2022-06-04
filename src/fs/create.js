import fs from 'fs/promises';


export const create = async () => {
    // Write your code here 
    try {
        const content = "I am fresh and young";
        await fs.writeFile('files/fresh.txt', content, 'utf8', { flag: 'wx' });
    } catch (error) {
        console.log('FS operation failed');
        throw new Error('FS operation failed');
    }

};

create();
