import fs from 'fs';


const remove = async () => {
    fs.unlink('src/fs/files/fileToRemove.txt', (err) => {
        if (err) console.error('FS operation failed');
    })
};

await remove();