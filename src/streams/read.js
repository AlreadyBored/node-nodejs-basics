import fs from 'fs';
import { Readable } from 'stream';

const read = async (filePath) => {
  const readableStream = new Readable({
    read() { }
  });

  const fileStream = fs.createReadStream(filePath);

  fileStream.on('data', (chunk) => {
    readableStream.push(chunk);
  });

  fileStream.on('end', () => {
    readableStream.push(null);
  });

  fileStream.on('error', (err) => {
    console.error('Error reading file:', err);
    readableStream.destroy(err);
  });

  readableStream.pipe(process.stdout);

  readableStream.on('error', (err) => {
    console.error('Error piping content to process.stdout:', err);
  });

  fileStream.resume();
};

const filePath = 'files/fileToRead.txt';

await read(filePath);