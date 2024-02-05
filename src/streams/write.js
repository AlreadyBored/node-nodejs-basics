import fs from 'fs';
import { Writable } from 'stream';

const write = async (filePath) => {
  const writableStream = fs.createWriteStream(filePath);

  const stdinWritable = new Writable({
    write(chunk, encoding, callback) {
      writableStream.write(chunk, encoding, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        }
        callback();
      });
    }
  });

  process.stdin.pipe(stdinWritable);

  process.stdin.on('error', (err) => {
    console.error('Error reading from process.stdin:', err);
  });

  writableStream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });

  writableStream.on('finish', () => {
    console.log(`Data written to ${filePath} successfully.`);
  });
};

const filePath = 'files/fileToWrite.txt';

await write(filePath);