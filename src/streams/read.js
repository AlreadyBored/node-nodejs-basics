import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const fileName = 'fileToRead.txt';
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(currentDir, 'files', fileName);

  try {
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    stream.on('end', () => {
      console.log('\nStream reading complete.');
    });
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
};

await read();