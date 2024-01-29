const fs = require('fs');
const path = require('path');

const rename = async () => {
  const currentFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';

  try {
    const currentFilePath = path.join(__dirname, currentFileName);
    const newFilePath = path.join(__dirname, newFileName);

    if (!fs.existsSync(currentFilePath)) {
      throw new Error('FS operation failed: Current file does not exist');
    }

    if (fs.existsSync(newFilePath)) {
      throw new Error('FS operation failed: New file already exists');
    }

    fs.renameSync(currentFilePath, newFilePath);

    console.log('File successfully renamed:', newFilePath);
  } catch (error) {
    console.error(error.message);
  }
};

await rename();