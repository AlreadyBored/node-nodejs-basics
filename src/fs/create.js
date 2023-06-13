import { writeFile } from 'node:fs';
import path from 'node:path';

const create = async () => {
  writeFile(
    path.resolve('files', 'fresh.txt'),
    'I am fresh and young',
    { flag: 'wx' },
    (error) => {
      if (error) throw Error('FS operation failed');
    }
  );
};

await create();
