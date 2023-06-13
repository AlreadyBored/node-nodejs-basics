import fs from 'fs';
import path from 'path';

const create = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const folderPath = path.join(dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');

  try {
    if (fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    fs.writeFile(filePath, 'I am fresh and young', () => {
      console.log('A new file has been created');
    });
  } catch (err) {
    console.error(err.message);
  }
};

await create();
