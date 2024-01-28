import fsPromises from 'node:fs/promises';
import fs, { Stats } from 'node:fs';

const folderName = 'src/fs/files';
const newFolderName = 'src/fs/files_copy';
const err = new Error('FS operation failed');

const copy = async () => {
  try {
    await fsPromises.stat(folderName);
     try {
      const copyFolterStat = (await fsPromises.stat(newFolderName)).isDirectory();
      if (copyFolterStat) {
        console.error(err);
     }}
      catch (e) {
       if (e.code === 'ENOENT') {
        try {await fsPromises.mkdir(newFolderName)
               const files = await fsPromises.readdir(folderName);
               await Promise.all(
                 files.map(async (item) => {
                   try {
                     const result = await fsPromises.stat(
                       `${folderName}/${item}`
                     );
                     if (result.isFile()) {
                       try {
                         const content = await fsPromises.readFile(
                           `${folderName}/${item}`,
                           { encoding: 'utf8' }
                         );
                         await fsPromises.writeFile(
                           `${newFolderName}/${item}`,
                           content
                         );
                       } catch (err) {
                         console.log(err);
                       }
                     }
                   } catch (e) {
                     throw e;
                   }
                 })
               );
        } catch (e) {
          console.error(e);
        }
       }
     }

  } catch {
    console.error(err);
  }
};

await copy();
