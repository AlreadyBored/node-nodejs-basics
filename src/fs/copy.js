import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinationFolder = __dirname + '/files-copy';
const sourceFolder = __dirname + '/files';
const copy = async () => {
  const errorCallback = err => {
    if (err) throw 'FS operation failed';
  };

  fs.mkdir(destinationFolder, errorCallback);

  fs.readdir(sourceFolder, { recursive: true }, (err, files) => {
    if (err) throw 'FS operation failed';
    files.forEach(file => {
      const sourceFilePath = path.join(sourceFolder, file);
      const destinationFilePath = path.join(destinationFolder, file);

      fs.copyFile(sourceFilePath, destinationFilePath, errorCallback);
    });
    return files;
  });
};

await copy();
