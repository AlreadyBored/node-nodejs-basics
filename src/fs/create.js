import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
  const filePath = path.join('files', 'fresh.txt');

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
        fs.writeFile(filePath, 'I am fresh and young', 'utf8') 
    } else {
        throw new Error('FS operation failed');
    }
  }};

await create();
