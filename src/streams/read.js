import { createReadStream } from 'node:fs';
import path from 'path';

const read = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToRead.txt');
  const fileStream = createReadStream(file);

  fileStream.pipe(process.stdout);
};

await read();
