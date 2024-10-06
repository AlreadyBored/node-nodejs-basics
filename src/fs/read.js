import { existsSync, promises as fs } from 'node:fs';

import path from 'path';

const read = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToRead.txt');

  if (!existsSync(file)) {
    throw new Error('FS operation failed');
  }

  const content = await fs.readFile(file, 'utf-8');

  console.log(content);
};

await read();
