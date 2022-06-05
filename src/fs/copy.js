import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const copy = async () => {
  const srcFolder = path.join(__dirname, '/files')
  const targetFolder = path.join(__dirname, '/files_copy');

  if (
    !fs.existsSync(srcFolder)
    || fs.existsSync(targetFolder)
  ) {
    throw new Error('FS operation failed')
  }

  fs.mkdirSync(targetFolder)
  let files = fs.readdirSync(srcFolder)
  for (let file of files) {
    fs.copyFileSync(path.join(srcFolder, file), path.join(targetFolder, file))
  }
};

copy();
