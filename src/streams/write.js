import fs from 'fs';

const write = async () => {
  const writable = fs.createWriteStream('./files/fileToWrite.txt');
  process.stdin.on('data', data => writable.write(data.toString()));
};

await write();
