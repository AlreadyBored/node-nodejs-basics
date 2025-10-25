import fs from 'node:fs/promises';

const list = async () => {
  const folderPath = 'files';

  try {
    await fs.access(folderPath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
    
  try {
    const files = await fs.readdir(folderPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw err;
  }
};

await list();
