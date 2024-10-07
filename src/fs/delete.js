import fs from 'fs';

const remove = async () => {
    // Write your code here 

    // Set the file path
    const filePath = new URL('files/fileToRemove.txt', import.meta.url);
    // Validate if the file exists
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    // Delete the file
    fs.unlink(filePath, (err) => {
        if (err) throw err;
    });
};

await remove();