import * as path from 'path';
import fsPromises from 'fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async (src, dest) => {
  return new Promise((resolve, reject) => {
    fsPromises.mkdir(dest)
        .then(resolve => console.log('Folder created'))
        .then(resolve => {
          fsPromises.readdir(src).then(resolve => {
            for (let entry of resolve) {
              let srcPath = path.join(src, entry);
              let destPath = path.join(dest, entry);
              fsPromises.copyFile(srcPath, destPath)
            }
          }).catch(reject => {
            process.stderr.write('FS operation failed. Folder not existed');
            process.exit(1);
          })
        })
        .catch(reject => {
          process.stderr.write('FS operation failed. Folder has already been created');
          process.exit(1);
        })
  })
}
copy(path.resolve(__dirname, 'files'), path.resolve(__dirname, 'files_copy'))
