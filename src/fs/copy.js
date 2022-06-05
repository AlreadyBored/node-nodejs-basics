import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async (dir, newDir) => {
  const dirPath = path.join(__dirname, dir);
  const newDirPath = path.join(__dirname, newDir);
  fs.access(dirPath, (err) => {
    if (err) throw new Error('FS operation failed');
  });
  fs.mkdir(newDirPath, (err) => {
    if (err) throw new Error('FS operation failed');;
    fs.readdir(dirPath, (err, files) => {
      if (err) throw new Error('FS operation failed');
      files.forEach((file) => {
        const filePath =  path.join(dirPath, file);
        const newFilePath =  path.join(newDirPath, file);
        fs.copyFile(filePath, newFilePath, (err) => {
          if (err) throw new Error('FS operation failed');
        });
      });
    });
  });

};

copy('files', 'files_copy');