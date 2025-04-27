import fs from 'fs/promises';

const remove = async () => {
    const targetFilePath = './src/fs/files/fileToRemove.txt';
    
    try {
        await fs.rm(targetFilePath);
        console.log('File "fileToRemove" is removed');
    } catch (removeFileError) {
        throw new Error('FS operation failed');
    }
};

await remove();