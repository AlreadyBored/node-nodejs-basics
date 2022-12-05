import fs from 'fs';

const read = async () => {
  const readableStream = fs.createReadStream('./src/streams/files/fileToRead.txt');
  readableStream.pipe(process.stdout);
};

await read();