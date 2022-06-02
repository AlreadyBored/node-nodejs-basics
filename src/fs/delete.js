import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
  const path = `${__dirname}files/fileToRemove.txt`;

  try {
    fs.unlinkSync(path)
  } catch (e) {
    throw new Error('FS operation failed');
  }
};
