import fs from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join('src', 'streams', 'files', 'fileToWrite.txt');

  try {
    const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });

    process.stdin.pipe(writeStream);

    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', () => reject(new Error('FS operation failed')));
      process.stdin.on('error', () => reject(new Error('FS operation failed')));
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await write();
