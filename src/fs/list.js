const fs = require('fs');
const path = require('path');

const list = async () => {
  const fileNameToRead = 'fileToRead.txt';

  try {
    const filePathToRead = path.join(__dirname, fileNameToRead);

    if (!fs.existsSync(filePathToRead)) {
      throw new Error('FS operation failed: File does not exist');
    }

    const fileContent = fs.readFileSync(filePathToRead, 'utf-8');

    console.log(`Content of ${fileNameToRead}:\n`, fileContent);
  } catch (error) {
    console.error(error.message);
  }
};

await list();