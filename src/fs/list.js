import fs from 'fs';
import path from 'path';

const list = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const folderPath = path.join(dirname, 'files');

  try {
    if (!fs.existsSync(folderPath)) {
      throw new Error('FS operation failed: Folder does not exist');
    }

    const fileNames = fs.readdirSync(folderPath);
    for (const fileName of fileNames) {
      console.log(fileName);
    }
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await list();
