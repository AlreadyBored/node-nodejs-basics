const fs = require('fs');
const path = require('path');

const read = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    if (!fs.existsSync(folderPath)) {
      throw new Error('FS operation failed: Folder does not exist');
    }

    const fileNames = fs.readdirSync(folderPath);

    console.log('Filenames in the "files" folder:', fileNames);
  } catch (error) {
    console.error(error.message);
  }
};

await read();