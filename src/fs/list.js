import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, readdir } from "fs/promises";
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');

export const list = async () => {
    access(filePath)
    .then(() => readdir(filePath))
    .then((result) => console.log(result))
    .catch(() => { throw new Error('FS operation failed') })
};

list()