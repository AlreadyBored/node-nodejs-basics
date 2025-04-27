import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const read = async () => {
  const filePath = join('src', 'streams/files', 'fileToRead.txt');

  const stream = createReadStream(filePath, 'utf-8');

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
  stream.on('end', () => {
    console.log('\nFile reading finished.');
  });
};

await read();
