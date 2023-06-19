import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));

  try {
    const buffer = await fs.readFile(`${dir}/files/fileToRead.txt`);
    console.log(buffer.toString());
  }
  catch (err) {
    throw new Error('FS operation failed')
  }
};

await read();
