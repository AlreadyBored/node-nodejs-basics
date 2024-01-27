import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const create = async () => {
  const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fresh.txt');
  const fileContent = 'I am fresh and young';
  const existError = 'FS operation failed';

  fs.open(pathToFile, 'wx', function(err, file) {
    if (err) {
      throw new Error(existError);
    }

    fs.writeFile(file, fileContent, function(err) {
      if (err) {
        throw new Error(err);
      }
    });
  })
};

await create();
