import fs from 'node:fs';

const read = async () => {
  const filePath = new URL('./files/fileToRead.txt', import.meta.url);

  const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  readStream.pipe(process.stdout);

  readStream.on('error', () => {
    throw new Error('FS operation failed');
  });
};

await read();

