const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const copy = async () => {
  const sourceFolderPath = path.join(__dirname, 'files');
  const destinationFolderPath = path.join(__dirname, 'files_copy');

  try {
    if (!fs.existsSync(sourceFolderPath)) {
      throw new Error('FS operation failed: Source folder does not exist');
    }

    if (fs.existsSync(destinationFolderPath)) {
      throw new Error('FS operation failed: Destination folder already exists');
    }

    fs.mkdirSync(destinationFolderPath);

    fse.copySync(sourceFolderPath, destinationFolderPath);

    console.log('Folder successfully copied:', destinationFolderPath);
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
