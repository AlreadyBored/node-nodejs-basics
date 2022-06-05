import { access, open, appendFile } from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fresh.txt');

export const create = async () => {
  try {
    await access(filePath, function (error) {
      if (error) {
        open(filePath, 'w', () => {
          appendFile(filePath, 'I am fresh and young', () => {});
        })        
      } else {
        throw new Error('FS operation failed');
      }
    });
  } catch (e) {
  }
};

create();