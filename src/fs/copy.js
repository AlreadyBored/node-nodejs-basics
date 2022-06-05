import { access, constants, readdir, stat, mkdir, cp } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'Custom exception';
  }
}

export const copy = async () => {
  const logSeparator = '-----------------------------------\n';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldFolder = 'files';
  const newFolder = 'files_copy';
  const pathTooldFolder = path.join(__dirname, oldFolder);
  const pathToNewFolder = path.join(__dirname, newFolder);

  access(pathTooldFolder, constants.F_OK, (err) => {
    console.log(
      `\nFolder or file named '${oldFolder}' ${
        err ? 'does not exist' : 'exists'
      }`
    );
    stat(pathTooldFolder, (err, stats) => {
      if (err) throw new UserException('FS operation error');
      if (!stats.isDirectory()) {
        console.log(`${logSeparator}'${oldFolder}' is not a folder`);
        console.log(logSeparator);
        process.exit(1);
      }
      readdir(pathTooldFolder, (err, files) => {
        if (err) throw err;
        if (files.length === 0) {
          console.log(`${logSeparator}Folder '${oldFolder}' is empty`);
          console.log(logSeparator);
          process.exit(1);
        }
        console.log(
          `${logSeparator}Files ready for copy:\n- ${files.join('\n- ')}`
        );
        access(pathToNewFolder, (err) => {
          if (err && err.code === 'ENOENT') {
            mkdir(pathToNewFolder, (err) => {
              console.log(
                `${logSeparator}New folder '${newFolder}' was created!`
              );
              cp(
                pathTooldFolder,
                pathToNewFolder,
                { recursive: true },
                (err) => {
                  if (err) throw err.message;
                  console.log(`${logSeparator}All files copied!`);
                  console.log(logSeparator);
                  process.exit(0);
                }
              );
            });
          } else {
            console.log(`${logSeparator}Folder '${newFolder} alredy exists!!!`);
            throw new UserException('FS operation error');
          }
        });
      });
    });
  });
};

copy();
