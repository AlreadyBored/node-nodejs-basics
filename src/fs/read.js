import fs from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');

    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }
  
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
};

await read();