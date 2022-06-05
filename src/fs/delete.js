import fs from 'fs';

export const remove = async () => {

    const ex = fs.existsSync('src/fs/files/fileToRemove.txt', () => {});

    if (ex) {
        fs.unlinkSync('src/fs/files/fileToRemove.txt')
    } else {
        console.log(new Error('FS operation failed'));
    }
    
};

remove();
