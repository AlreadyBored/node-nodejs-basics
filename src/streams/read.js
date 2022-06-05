import { dirname, join } from 'path';
import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

export const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = 'fileToRead.txt';
  const pathToFile = join(__dirname, 'files', file);

  const readStream = createReadStream(pathToFile);
  readStream.pipe(stdout);
  readStream.on('error', (error) => {
    throw error;
  });
  readStream.on('end', () => {
    console.log('\n');
  });
};

read();
