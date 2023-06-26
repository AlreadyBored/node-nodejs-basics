import fs from 'node:fs';

const write = async () => {
  const filepath = './src/streams/files/fileToWrite.txt';

  process.stdin.pipe(fs.createWriteStream(filepath));
};

await write();
