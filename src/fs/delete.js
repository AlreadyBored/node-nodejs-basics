import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');
const FILE_TO_REMOVE = join(filePath, 'fileToRemove.txt');

import { access, unlink } from "fs/promises";

export const remove = async () => {
  access(FILE_TO_REMOVE)
    .then(() => unlink(FILE_TO_REMOVE))
    .catch(() => { throw new Error('FS operation failed') });
};

remove();