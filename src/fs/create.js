import * as fs from 'node:fs/promises';
import path from 'path';

const create = async () => {
    // Write your code here 
    console.log('Creating a file...');
    const filePath = path.join('./src/fs/files', 'fresh.txt');
    console.log('File path:', filePath);
    const content = 'I am fresh and young!';
    try {
        await fs.writeFile(filePath, content, { flag: 'ax' })
        console.log('File created successfully!');        
    }
    catch (error) {
        if (error.code === 'EEXIST') {
            console.error('File already exists!');
        } else {
            console.error('Error creating file:', error);
        }
    }
};

await create();