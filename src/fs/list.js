import * as fs from 'fs';
import * as path from 'path';
// import fsPromises from 'fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const list = async (path) => {
      return new Promise((resolve, reject) => {
            fs.readdir(path, (err, files) => {
              if(err) {
                return reject(err)
              }
              resolve(files)
            })
          }
      )
    }
;

list(path.resolve(__dirname, 'files'))
    .then(files => console.log(files))
    .catch(err => {
      process.stderr.write('FS operation failed. Folder not found');
      process.exit(1);
    })
