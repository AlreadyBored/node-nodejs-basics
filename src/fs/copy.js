import * as fs from 'fs';
import * as path from 'path';
// import fsPromises from 'fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// export const copy = async (src, dest) => {
//   return new Promise((resolve, reject) => {
//     fsPromises.mkdir(dest)
//         .then(resolve => console.log('Folder created'))
//         .then(resolve => {
//           fsPromises.readdir(src).then(resolve => {
//             console.log(resolve)
//             for (let entry of resolve) {
//               let srcPath = path.join(src, entry);
//               let destPath = path.join(dest, entry);
//               fsPromises.copyFile(srcPath, destPath)
//             }
//           }).catch(reject => console.log('FS operation failed. Folder not existed'))
//         })
//         .catch(reject => console.log('FS operation failed. Folder has already been created'))
//   })
// }
export const copy = async (src, dest) => {
  fs.mkdir(dest, (err) => {
    try {
      if (err) {
        throw new Error('FS operation failed. Folder has already been created')
      }
      console.log('Folder created');
      fs.readdir(src, (err, entries) => {
        try{
          if (err) {
            throw new Error('FS operation failed. Folder not existed')
          }
          for (let entry of entries) {
            let srcPath = path.join(src, entry);
            let destPath = path.join(dest, entry);
            fs.copyFile(srcPath, destPath, (err) => {
              if(err){
                throw err;
              }
              console.log('Copy file')
            })
          }
        } catch (err) {
          process.stderr.write(err.message);
          process.exit(1);
        }
      })
    } catch (err) {
      process.stderr.write(err.message);
      process.exit(1);
    }
  })
};
copy(path.resolve(__dirname, 'files'), path.resolve(__dirname, 'files_copy'))
