import fs from 'fs';
import path from 'path';

const create = async () => {
  const joke = 'I am fresh and young';
  const file = path.join(process.cwd(), 'files', 'fresh.txt');

  if (fs.existsSync(file)) {
    throw new Error('FS operation failed');
  }

  fs.writeFile(file, joke, () => {});
};

await create();
