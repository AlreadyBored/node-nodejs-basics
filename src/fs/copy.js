import fs from 'fs';
import path from 'path';

const copy = async () => {
  const src = './files';

  const dest = './files_copy';

  const exist = fs.existsSync(src);
  const existDest = fs.existsSync(dest);

  if (!exist || existDest) {
    throw new Error('FS operation failed');
  } else {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childFile) => {
      copyFile(
        path.join(src, childFile),
        path.join(dest, childFile),
        (err) => err
      );
    });
  }
};

copy();
