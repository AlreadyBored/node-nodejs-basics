import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
  const folderPath = `${__dirname}files`;

  try {
    const filesName = fs.readdirSync(folderPath);
    console.log(filesName);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

list();
