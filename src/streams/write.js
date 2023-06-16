import { createWriteStream } from 'node:fs';

const url = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
  console.log(
    'Write your data\nPress "Enter" for safe\nPress "Ctrl+C" for exit'
  );
  const writeStream = createWriteStream(url);
  process.stdin.pipe(writeStream);
};

await write();
