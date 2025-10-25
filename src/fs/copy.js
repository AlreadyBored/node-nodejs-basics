import fs from 'node:fs/promises';

const copy = async () => {
  const sourcePath = 'files';
  const destinationPath = 'files_copy';

  try {
    await fs.access(sourcePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed'); 
    } else {
      throw err;
    }
  }
    
  try {
    await fs.access(destinationPath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.cp(sourcePath, destinationPath, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
