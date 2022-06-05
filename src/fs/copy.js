import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');

import { access, readdir, mkdir, copyFile } from "fs/promises";

const NEW_DIR_NAME = 'files_copy';
const NEW_DIR_PATH = join(dirname(fileURLToPath(import.meta.url)), NEW_DIR_NAME);
export const copy = async () => {
  access(filePath)
  .then(() => access(NEW_DIR_PATH))
  .then(Promise.reject, () => mkdir(NEW_DIR_PATH))
  .then(() => readdir(filePath))
  .then((result) => {
    result.forEach((el) => {
      copyFile(join(filePath, el), join(NEW_DIR_PATH, el))
    })
  })
  .then(() => console.log('Folder copied'))
  .catch(() => { throw new Error('FS operation failed')});
  };

copy();