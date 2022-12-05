import { createWriteStream } from 'node:fs';

const write = async () => {
  const path = './files/fileToWrite.txt';
  const writableStream = createWriteStream(path);
  // const readStream = createReadStream(path, 'utf8');
  // readStream.on('data', (data) => {
  //   process.stdout.write(data);
  // });
  process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
    process.exit();
  });
};

await write();
x;
