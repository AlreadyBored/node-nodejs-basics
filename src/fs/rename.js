import fs from 'fs';

const rename = async () => {
    try {
        const sourceFilePath = './files/wrongFilename.txt';
        const targetFilePath = './files/properFilename.md';
        if (!fs.existsSync(sourceFilePath)) {
          throw new Error('Source file does not exist.');
        }
        if (fs.existsSync(targetFilePath)) {
          throw new Error('Target file already exists.');
        }
        fs.renameSync(sourceFilePath, targetFilePath);
        console.log('File renamed successfully.');
    } catch (error) {
        console.error('FS operation failed:', error.message);
    }
};

await rename();