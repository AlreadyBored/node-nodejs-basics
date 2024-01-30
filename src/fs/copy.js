import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const copy = async () => {
  const currentPath = path.dirname(fileURLToPath(import.meta.url));
  const filesFolder = path.join(currentPath, '/files');
  const destFolder = path.join(currentPath, '/files_copy');

  fs.cp(filesFolder, destFolder, {recursive: true, errorOnExist: true, force: false}, (err) => {
    if (err) {
      if (err.code === "ERR_FS_CP_EEXIST") {
        throw new Error("FS operation failed");
      } else {
        throw new Error(err);
      }
    }
  });
};

await copy();
