import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const create = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fresh.txt');
  const fileContent = 'I am fresh and young';

  fs.open(filePath, 'wx', function(err, file) {
    if (err) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(file, fileContent, function(err) {
      if (err) {
        throw new Error(err);
      }
    });
  })
};

await create();
