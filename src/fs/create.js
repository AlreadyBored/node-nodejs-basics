import * as fs from 'node:fs/promises';
import path from 'path';

const create = async () => {
    // Write your code here 
    const filePath = path.join('src','fs','files','fresh.txt');
    const content = 'I am fresh and young!';
    try {
        await fs.writeFile(filePath, content, { flag: 'a+' })
        console.log('File created successfully!');        
    }
    catch (error) {
        console.error('Error: FS operation failed: ', error.message);
    }
};

await create();