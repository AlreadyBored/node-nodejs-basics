import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');

import { access, rename as renameFS} from "fs/promises";
const OLD_NAME = join(filePath, 'wrongFilename.txt');
const NEW_NAME = join(filePath, 'properFilename.md');

export const rename = async () => {
  access(OLD_NAME)
  .then(() => access(NEW_NAME))
    .then(Promise.reject, () => renameFS(OLD_NAME, NEW_NAME))
  .catch(() => { throw new Error('FS operation failed') })
};

rename();