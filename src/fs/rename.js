import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const rename = async (file, rename) => {
  fs.readFile(
      file,
      (err, data) => {
        try {
          if (err) {
            throw new Error(`FS operation failed. File not found`);
          } else {
            fs.readFile(
                rename,
                (err, data) => {
                  try {
                    if (err) {
                      fs.rename(file, rename, (err) => {
                        if(err){
                          throw err;
                        }
                        console.log('File renamed')
                      })
                    } else {
                      throw new Error(`FS operation failed. File exists`);
                    }
                  }  catch (err) {
                    process.stderr.write(err.message);
                    process.exit(1);
                  }
                }
            )
          }
        } catch (err) {
          process.stderr.write(err.message);
          process.exit(1);
        }
      }
  )
};
rename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'))
