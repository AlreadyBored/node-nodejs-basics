import fs from 'fs';

const list = async () => {
try {
    const folderPath = 'files';
  if (!fs.existsSync(folderPath)) {
    throw new Error('Folder does not exist.');
  }
  const fileNames = fs.readdirSync(folderPath);
  console.log(fileNames);
} catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await list();