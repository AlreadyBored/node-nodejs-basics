import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join('files', 'fileToWrite.txt');

  try {
    const writableStream = createWriteStream(filePath, { encoding: 'utf8' });

    writableStream.on('error', (err) => {
      throw new Error('FS operation failed');
    });

    process.stdin.setEncoding('utf8');

    process.stdin.on('data', (chunk) => {
      writableStream.write(chunk);
    });

    process.stdin.on('end', () => {
      writableStream.end();
      console.log('Success!');
    });

    process.stdin.on('error', () => {
      throw new Error('FS operation failed');
    });

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await write();
