import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, 'files'), function (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

  fs.stat(path.join(__dirname, 'files_copy'), function (err) {
    if (err) {
      return;
    }
    throw new Error('FS operation failed');
  })

  await fsPromises.mkdir(path.join(__dirname, 'files_copy'), { recursive: true });

  /*const filesCopied = await fsPromises.readdir(path.join(__dirname, 'files-copy'), { withFileTypes: true });
  for (let fileCopied of filesCopied) {
    await fsPromises.unlink(path.join(__dirname, 'files-copy', fileCopied.name));
  }*/

  const files = await fsPromises.readdir(path.join(__dirname, 'files'), { withFileTypes: true });

  for (let file of files) {
    if (file.isFile()) {
      await fsPromises.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files_copy', file.name));
    }
  }
};

copy();
