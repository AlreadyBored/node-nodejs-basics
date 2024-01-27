import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import fs from 'fs';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files");
const destinationPath = path.join(dirName, "files_copy");
const filesDirCopyErrorMsg = "FS operation failed";

const copy = async () => {
    try {
      await fsPromises.access(destinationPath);
      throw Error(filesDirCopyErrorMsg);
    } catch (error) {
      if (error.message === filesDirCopyErrorMsg) {
        throw error;
      } else {
        try {
          const files = await fsPromises.readdir(sourcePath, {recursive: true});
          for (const file of files) {
            //console.log(file);
            const itemPath = path.resolve(sourcePath, file);
            const itemStat = await fsPromises.stat(itemPath);
            const itemDestPath = path.resolve(destinationPath, file);
            if (itemStat.isFile()) {
              try {
                const rs = fs.createReadStream(itemPath);
                const ws = fs.createWriteStream(itemDestPath);
                rs.pipe(ws);
                //fs.createReadStream(itemPath).pipe(fs.createWriteStream(itemDestPath));
              } catch (error) {
                console.log(error);
              }
            } else if (itemStat.isDirectory()) {
              await fsPromises.mkdir(itemDestPath, { recursive: true })
            }
          }
        }
        catch (error) {
          throw Error(filesDirCopyErrorMsg);
        }
      }
    }
};

await copy();
