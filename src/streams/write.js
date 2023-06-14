import fs from 'fs';

const write = async () => {
  const writableStream = fs.createWriteStream('./streams/files/fileToWrite.txt');
  process.stdin.on('data', data => {
    writableStream.write(data)
    process.exit();
  });
};

await write();