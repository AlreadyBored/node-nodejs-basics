import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join('files', 'fileToRead.txt');

  try {
    const stream = createReadStream(filePath, { encoding: 'utf8' });

    stream.on('error', (err) => {
      throw new Error('FS operation failed');
    });

    stream.pipe(process.stdout);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
