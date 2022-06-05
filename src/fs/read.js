import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const filePath = `${__dirname}files/fileToRead.txt`
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

read();
