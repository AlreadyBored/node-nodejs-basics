import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young!';

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, content);
    } else {
      throw err;
    }
  }
};

await create();