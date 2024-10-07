import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const read = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const fileName = path.join(path.dirname(currenDir), 'files', 'fileToRead.txt');
  const fileStream = await fs.createReadStream(fileName);
  fileStream.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
};
await read();
