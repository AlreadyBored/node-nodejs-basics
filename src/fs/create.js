import fs from 'fs';

 // Set the file path
const filePath = new URL('files/fresh.txt', import.meta.url);

const create = async () => {
    // Write your code here 

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    // Create a file
    fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) throw err;
    });
};

await create();