import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import fs from 'fs';
import * as utils from './utils.js';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files");
const destinationPath = path.join(dirName, "files_copy");

const copy = async () => {
    try {
      await fsPromises.access(destinationPath);
      throw Error(utils.fsErrorMsg);
    } catch (error) {
      if (error.message === utils.fsErrorMsg) {
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
          throw Error(utils.fsErrorMsg);
        }
      }
    }
};

await copy();
