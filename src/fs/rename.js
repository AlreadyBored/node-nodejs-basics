import fs from 'node:fs/promises';

const rename = async () => {
  const sourceFile = 'files/wrongFilename.txt';
  const destinationFile = 'files/properFilename.md';

  try {
    await fs.access(sourceFile);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }

  try {
    await fs.access(destinationFile);
    throw new Error('FS operation failed'); 
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.rename(sourceFile, destinationFile);
    } else {
      throw err;
    }
  }

};

await rename();
