import { access, constants, readdir, stat, mkdir, cp } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'Custom exception';
  }
}

export const list = async () => {
  const logSeparator = '-----------------------------------\n';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folder = 'files';
  const pathToFolder = path.join(__dirname, folder);

  access(pathToFolder, constants.F_OK, (err) => {
    console.log(
      `\nFolder or file named '${folder}' ${err ? 'does not exist' : 'exists'}`
    );
    stat(pathToFolder, (err, stats) => {
      if (err) throw new UserException('FS operation error');
      if (!stats.isDirectory()) {
        console.log(`${logSeparator}'${folder}' is not a folder`);
        console.log(logSeparator);
        process.exit(1);
      }
      readdir(pathToFolder, (err, files) => {
        if (err) throw err;
        if (files.length === 0) {
          console.log(`${logSeparator}Folder '${folder}' is empty`);
          console.log(logSeparator);
          process.exit(1);
        }
        console.log(
          `${logSeparator}Filelist if '${folder}' folder:\n- ${files.join(
            '\n- '
          )}`
        );
        // массивом тоже можно распечатать...
      });
    });
  });
};

list();
