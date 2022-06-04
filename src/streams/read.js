import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const read = async () => {
  const filename = fileURLToPath(import.meta.url);
  const path = join(dirname(filename), 'files/fileToRead.txt');
  const fileStream = createReadStream(path, 'utf-8');

  let text = '';
  fileStream.on('readable', () => {
    const chunk = fileStream.read();
    chunk ? (text += chunk) : console.log(text);
  });
  fileStream.on('error', (e) => console.log(e.message));
};

read();
