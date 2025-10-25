import fs from 'node:fs/promises';

const read = async () => {
  const fileToReadPath = 'files/fileToRead.txt';

  try {
    await fs.access(fileToReadPath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
    
  try {
    const content = await fs.readFile(fileToReadPath, 'utf8');
    console.log(content);
  } catch (err) {
    throw err;
  }
};

await read();
