import fs from 'fs';

const read = async () => {
  const readFile = fs.createReadStream('src/streams/files/fileToRead.txt');

  readFile.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();