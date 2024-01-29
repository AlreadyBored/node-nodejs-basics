const fs = require('fs');
const path = require('path');

const remove = async () => {
  const fileNameToRemove = 'fileToRemove.txt';

  try {
    const filePathToRemove = path.join(__dirname, fileNameToRemove);

    if (!fs.existsSync(filePathToRemove)) {
      throw new Error('FS operation failed: File does not exist');
    }

    fs.unlinkSync(filePathToRemove);

    console.log('File successfully deleted:', fileNameToRemove);
  } catch (error) {
    console.error(error.message);
  }
};

await remove();