import fs from 'node:fs/promises';

const rename = async () => {
  const __dirname = import.meta.dirname;
  const oldFileName = `${__dirname}/files/wrongFilename.txt`;
  const newFileName = `${__dirname}/files/properFilename`;

  try {
    await fs.access(newFileName);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  try {
    await fs.rename(oldFileName, newFileName);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } 
    throw error;
  }
};

await rename();
