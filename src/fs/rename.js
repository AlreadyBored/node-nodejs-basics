import fs from 'fs';
import path from 'path';

const rename = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const sourceFilePath = path.join(dirname, 'files', 'wrongFilename.txt');
  const destinationFilePath = path.join(dirname, 'files', 'properFilename.md');

  try {
    if (!fs.existsSync(sourceFilePath)) {
      throw new Error('FS operation failed: Source file does not exist');
    }

    if (fs.existsSync(destinationFilePath)) {
      throw new Error('FS operation failed: Destination file already exists');
    }

    fs.renameSync(sourceFilePath, destinationFilePath);

    console.log('File has been renamed successfully.');
  } catch (err) {
    throw new Error(`FS operation failed: ${err.message}`);
  }
};

await rename();
