import fs from 'node:fs';
import path from 'node:path';

const FILE_TO_WRITE = 'fileToWrite.txt';
const currentDirectory = process.cwd();
const filePath = path.join(currentDirectory, '/files', FILE_TO_WRITE);

const write = () => {
  const writableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writableStream);
  writableStream.on('error', (err) => {
    console.error('An error occurred during writing: ', err);
});
};

write();