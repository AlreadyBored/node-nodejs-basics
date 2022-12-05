import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFileCopy = path.join(dirname, 'files_copy');
const pathFiles = path.join(dirname, 'files');
const error_msg = 'FS operation failed';

const copy = async () => {
  try {
    await fs.mkdir(pathFileCopy, (err) => {
      if (err) throw new Error(error_msg);
    });

    await fs.readdir(pathFiles, (err, files) => {
      if (err) throw new Error(error_msg);
      files.forEach((file) => {
        fs.copyFile(
          path.join(pathFiles, file),
          path.join(dist, file)
        );
      });
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(error_msg));
    }
  }
};

copy();
