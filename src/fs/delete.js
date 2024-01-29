import fs from 'fs';
import path from 'path';

const remove = async () => {
    // Write your code here 
    const filePath = path.join("files", 'fileToRemove.txt');

    try {
        await fs.promises.access(filePath);

        await fs.promises.unlink(filePath);

        console.log('File deleted successfully');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();