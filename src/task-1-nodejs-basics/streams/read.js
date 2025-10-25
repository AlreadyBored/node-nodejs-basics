import fs from 'node:fs';
import path from 'node:path';

const FILE_TO_READ = 'fileToRead.txt';
const currentDirectory = process.cwd();
const filePath = path.join(currentDirectory, '/files', FILE_TO_READ);

const read = () => {
  const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });
  readableStream.pipe(process.stdout);
  readableStream.on('error', (err) => {
      console.error('An error occurred:', err);
  });
};

read();
