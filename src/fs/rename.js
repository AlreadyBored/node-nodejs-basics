import fs from 'fs/promises';

const rename = async () => {
    const sourceFileName = './src/fs/files/wrongFilename.txt';
    const targetFileName = './src/fs/files/properFilename.md';
  
    try {
      await fs.access(sourceFileName, fs.constants.F_OK);
  
      try {
        await fs.access(targetFileName, fs.constants.F_OK);
        throw new Error('FS operation failed');
      } catch (err) {
        if (err.code !== 'ENOENT') {
          throw new Error('FS operation failed');
        }
      }
  
      await fs.rename(sourceFileName, targetFileName);
  
    } catch (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw new Error('FS operation failed');
      }
    }
  
};

await rename();