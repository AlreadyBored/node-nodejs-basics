import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
  const filePath = join('src', 'fs', 'files', 'fileToWrite.txt');
  
  return new Promise((resolve, reject) => {
    const writeStream = createWriteStream(filePath);

    process.stdin.pipe(writeStream);

    process.stdin.on('error', (err) => {
      console.error('Error with stdin:', err);
      reject(new Error('FS operation failed'));
    });

    writeStream.on('finish', () => {
      console.log('Data written to file successfully');
      resolve();
    });
  });
};

await write();
