import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');
const FILE_TO_HASH = join(filePath, 'fileToCalculateHashFor.txt');

import * as crypto from 'crypto';
import { readFile } from "fs/promises";

export const calculateHash = async () => {
  const hash = crypto.createHash('sha256');

  const hex = await readFile(FILE_TO_HASH)
        .then((res) => hash.update(res))
        .then((hash) => hash.digest('hex'))
        .catch(() => { throw new Error('HASH operation failed') });

  return hex;
};

calculateHash().then((e) => console.log(e));