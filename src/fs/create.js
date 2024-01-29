const fs = require('fs');
const path = require('path');

const create = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'IAmFreshAndYoung.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File created successfully: IAmFreshAndYoung.txt');
        } else {
            throw error;
        }
    }
};

await create();