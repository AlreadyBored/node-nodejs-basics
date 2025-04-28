import { open, rename as fsRename } from 'node:fs/promises';

const rename = async () => {
  const wrongFileName = 'src/fs/files/wrongFilename.txt';
  const correctFileName = 'src/fs/files/properFilename.md';

  try {
    await open(wrongFileName, 'r');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.log(`Unexpected error when opening ${wrongFileName}`, error);
    }
  }

  try {
    await open(correctFileName, 'r');
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.log(`Unexpected error when opening ${correctFileName}`, error);
    }
  }

  try {
    await fsRename(wrongFileName, correctFileName);
    console.log('File renamed successfully');
  } catch (error) {
    console.log('Error renaming file:', error);
  }
};

await rename();