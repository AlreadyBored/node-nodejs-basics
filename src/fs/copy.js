import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files');
const pathToFilesCopy = join(__dirname, 'files_copy');
const errorMessage = 'FS operation failed';

export const copy = async () => {
  fs.access(pathToFile, (err) => {
    if (err) {
      throw new Error(errorMessage);
    }
    fs.access(pathToFilesCopy, (err) => {
      if (!err) {
        throw new Error(errorMessage);
      }
      copyRecursive(pathToFile, pathToFilesCopy);
    });
  });
};

async function copyRecursive(dirPath, dirCopyPath) {
  let dirItems = [];
  fs.readdir(dirPath, (err, dirItemsArr) => {
    if (err) {
      throw new Error(errorMessage);
    }
    dirItems = dirItemsArr;
    fs.access(dirCopyPath, (err) => {
      if (!err) {
        throw new Error(errorMessage);
      }
      fs.mkdir(dirCopyPath, (err) => {
        if (err) {
          throw new Error(errorMessage);
        }
        for (let index = 0; index < dirItems.length; index++) {
          const dirItem = dirItems[index];
          const dirItemPath = join(dirPath, dirItem);
          fs.lstat(dirItemPath, (err, data) => {
            if (err) {
              throw new Error(errorMessage);
            }
            const newCopyPath = join(dirCopyPath, dirItem);
            if (data.isFile()) {
              fs.copyFile(dirItemPath, newCopyPath, (err) => {
                if (err) {
                  throw new Error(errorMessage);
                }
              });
            } else if (data.isDirectory()) {
              fs.readdir(dirItemPath, (err, dirItems) => {
                if (err) {
                  throw new Error(errorMessage);
                }
                copyRecursive(dirItemPath, newCopyPath, dirItems);
              });
            }
          });
        }
      });
    });
  });
}

copy();
