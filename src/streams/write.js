import { dirname, join } from 'path';
import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

export const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = 'fileToWrite.txt';
  const pathToFile = join(__dirname, 'files', file);

  const writeStream = createWriteStream(pathToFile, {
    flags: 'a',
    encoding: 'utf8',
  });
  writeStream.on('error', (err) => console.log(err));
  stdin.pipe(writeStream);
  process.on('SIGINT', () => {
    console.log('\nInput finished. Check file...');
    process.exit(0);
  });
};

write();
