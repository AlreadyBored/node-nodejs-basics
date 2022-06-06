import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');
const FILE_TO_READ = join(filePath, 'fileToRead.txt');

import { access, readFile } from "fs/promises";

export const read = async () => {
  access(FILE_TO_READ)
    .then(() => readFile(FILE_TO_READ, 'utf8'))
    .then((result) => console.log(result))
    .catch(() => { throw new Error('FS operation failed') })
};

read();