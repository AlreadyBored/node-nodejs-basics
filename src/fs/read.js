import fs from 'fs/promises';
import path from 'path';
   



const read = async () => {
  const filePath = path.resolve('files', 'fileToRead.txt');

  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }    
};

await read();
