import { createWriteStream } from 'node:fs';

const write = async () => {
  const writeStream = createWriteStream('./files/fileToWrite.txt');

  process.stdin.on('data', (chunk) => {
    writeStream.write(chunk);
    process.exit();
  });
};

await write();
