import fs, { existsSync } from 'fs';

const remove = async () => {
    try {
        if (fs.existsSync('./files/fileToRemove.txt')) {
            fs.promises.unlink('./files/fileToRemove.txt');
        }
    } catch (err) {
        console.error('Something went wrong!');
    }
};

await remove();