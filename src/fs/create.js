const fs = require('fs');
const path = require('path');

const create = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');
  const fileContent = 'I am fresh and young';

  try {
    if (fs.existsSync(filePath)) {
      throw new Error('FS operation failed: File already exists');
    }

    fs.writeFileSync(filePath, fileContent);

    console.log('Fresh file created successfully:', filePath);
  } catch (error) {
    console.error(error.message);
  }
};

await create();