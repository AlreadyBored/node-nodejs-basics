import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const write = async () => {
  const filename = fileURLToPath(import.meta.url);
  const path = join(dirname(filename), 'files/fileToWrite.txt');
  const writeStream = createWriteStream(path);

  process.stdin.on('data', (text) => {
    writeStream.write(text, (e) => {
      if (e) console.error(e.message);
    });
  });
};

write();
