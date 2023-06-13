import fs from 'fs';
import path from 'path';

const read = async () => {
  const currentFolderPath = new URL(import.meta.url).pathname;
  const filePath = path.join(
    path.dirname(currentFolderPath),
    'files',
    'fileToRead.txt'
  );

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed: File does not exist');
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
  } catch (err) {
    console.log(err);
  }
};

await read();
