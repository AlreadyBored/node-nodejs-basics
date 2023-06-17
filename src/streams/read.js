import fs from 'node:fs';

const read = async () => {
  const filepath = './src/streams/files/fileToRead.txt';

  fs.createReadStream(filepath).pipe(process.stdout);
};

await read();
