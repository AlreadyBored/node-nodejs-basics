import fs from 'fs';

const read = async () => {
  fs.createReadStream('./streams/files/fileToRead.txt').on('data', (chunk) => {
    process.stdout.write(chunk.toString());
  });
};

await read();