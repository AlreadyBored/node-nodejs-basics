import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const write = async () => {
  const filePath = join('src', 'streams/files', 'fileToWrite.txt');

  const stream = createWriteStream(filePath, 'utf-8');

  process.stdin.resume();

  process.stdin.on('data', (chunk) => {
    stream.write(chunk);
  });

  process.stdin.on('end', () => {
    stream.end();
    process.exit(0);
  });
};

await write();
