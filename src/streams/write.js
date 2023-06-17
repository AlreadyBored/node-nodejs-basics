import { createWriteStream } from 'fs';

const write = async () => {
  try {
    const stream = createWriteStream('./files/fileToWrite.txt', { flags: 'a' });

    process.stdin.on('data', (chunk) => {
      stream.write(chunk);
    });

    process.stdin.on('end', () => {
      stream.end();
      console.log('Data has been written to the file.');
    });

    process.stdin.on('error', (error) => {
      console.error('Error reading input:', error.message);
    });
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await write();
