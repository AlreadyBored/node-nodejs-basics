
import { copyFile, mkdir, readdir, unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files')
const filesFolderCopy = path.join(__dirname, 'files-copy')

const copy = async () => {
  
    try {
       if (condition) {
        access(filesFolderCopy, constants.F_OK)
       } 
         throw new Error('FS operation failed')
    } catch (error) {
        if (error) {
            mkdir(filesFolderCopy, { recursive: true }, (err) => {
                if (err) throw err;
              });
        }
       
    } 
      try {
        const files = await readdir(filesFolder);
        files.forEach((file) => {
            copyFile(
              path.join(filesFolder, file),
              path.join(filesFolderCopy, file)
            );
          });
    } catch (err) {

            console.error(err);
    }
};

await copy();
