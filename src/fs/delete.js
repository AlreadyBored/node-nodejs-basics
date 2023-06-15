import fs from 'fs';

const remove = async () => {
  try {
    const filePath = './files/fileToRemove.txt';
    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist.');
    }
    fs.unlinkSync(filePath);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error('FS operation failed:', error.message);
    }
};

await remove();