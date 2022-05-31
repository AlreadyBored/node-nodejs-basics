import fs from 'fs';

export const read = async () => {
    const exists = fs.existsSync('./src/fs/files/fileToRead.txt', () => {});
    
    if (exists) {
        const file = fs.readFileSync('./src/fs/files/fileToRead.txt', 'utf8', () => {})
        console.log(file)
    } else {
        throw new Error('FS operation failed');
    }
};


// read()