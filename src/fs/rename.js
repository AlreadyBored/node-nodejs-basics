import { access, rename, constants, stat } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'Custom exception';
  }
}

export const renameFile = async () => {
  const logSeparator = '-----------------------------------\n';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folder = 'files';
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const pathToOldFile = path.join(__dirname, folder, oldFileName);
  const pathToNewFile = path.join(__dirname, folder, newFileName);

  access(pathToOldFile, constants.F_OK, (err) => {
    console.log(
      `\nFolder or file named '${oldFileName}' ${
        err ? 'does not exist' : 'exists'
      }`
    );
    stat(pathToOldFile, (err, stats) => {
      if (err) throw new UserException('FS operation error');
      if (!stats.isFile()) {
        console.log(`${logSeparator}'${oldFileName}' is not a file`);
        console.log(logSeparator);
        process.exit(1);
      }

      access(pathToNewFile, (err) => {
        if (err && err.code === 'ENOENT') {
          rename(pathToOldFile, pathToNewFile, (err) => {
            console.log(
              `${logSeparator}File '${oldFileName}' was renamed to ${newFileName}!\n`
            );
          });
        } else {
          console.log(`${logSeparator}File '${newFileName} alredy exists!!!`);
          throw new UserException('FS operation error');
        }
      });
    });
  });
};

renameFile();
