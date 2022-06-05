import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const rename = async () => {
  const wrongFilePath = `${__dirname}files/wrongFilename.txt`;
  const rightFilePath = `${__dirname}files/properFilename.md`;

  try {
    fs.renameSync(wrongFilePath, rightFilePath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

rename();
