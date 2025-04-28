import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
  const filePath = join('src', 'fs', 'files', 'fileToRead.txt');
  
  return new Promise((resolve, reject) => {
    const fileStream = createReadStream(filePath);
    
    fileStream.pipe(process.stdout);

    fileStream.on('end', () => {
      resolve();
    });

    fileStream.on('error', (err) => {
      console.error('Error reading file:', err);
      reject(new Error('FS operation failed'));
    });
  });
};

await read();
