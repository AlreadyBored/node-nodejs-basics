import fs, { copyFile } from 'fs';
import path from 'path';

const copy = async () => {
  //   fs.readdir('../fs', (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       const folders = data.filter((file) => file === 'files_copy');
  //       if (folders.length === 0) {
  //         fs.copy('./files', './files_copy', (err) => {
  //           if (err) {
  //             console.log(err);
  //           } else {

  //           }
  //         });
  //       } else {
  //         console.log('folder is exist');
  //       }
  //     }
  //   });
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
