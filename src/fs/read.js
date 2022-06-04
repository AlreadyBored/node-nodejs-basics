import fs from 'fs';

export const read = async () => {
    if (fs.existsSync('./files/fileToRead.txt')) {
        fs.readFile('./files/fileToRead.txt', 'utf8', (error, data) => {
            if (error) {
                throw error;
            }
        
            console.log(data);
        })
    }
    else {
        throw new Error("FS operation failed");
    }
};