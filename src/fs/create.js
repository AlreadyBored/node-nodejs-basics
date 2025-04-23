import fs from 'fs';
const create = async () => {
    // Write your code here 
    try {
        const isExists = fs.existsSync('./src/fs/files/fresh.txt');
        if (isExists) throw new Error('FS operation failed');
        fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw new Error('FS operation failed')
        })

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();