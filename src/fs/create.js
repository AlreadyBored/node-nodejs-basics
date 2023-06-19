import { writeFile, existsSync } from 'fs';

const create = async () => {
    // Write your code here 
    const filePath = './src/fs/files/fresh.txt';
    const content = 'I am fresh and young';
    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    writeFile(filePath, content, () => {
        console.log("File created")
    });
};

await create();