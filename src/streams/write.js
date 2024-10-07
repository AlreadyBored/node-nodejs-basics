import fs from 'fs';

const write = async () => {
  const writedFile = fs.createWriteStream('src/streams/files/fileToWrite.txt');

  process.stdin.on('data', (chunk) => {
    writedFile.write(chunk);
  });
};

await write();