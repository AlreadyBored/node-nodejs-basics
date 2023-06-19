import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const copy = async () => {
  const sourceFolder = path.resolve(_dirname, 'files');
  const destFolder = path.resolve(_dirname, 'files_copy');

  const copyFiles = () => {
    fs.readdir(sourceFolder, async (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        const sourceFile = path.join(sourceFolder, file);
        const destFile = path.join(destFolder, file);

        fs.copyFile(sourceFile, destFile, (err) => {
          if (err) throw err;
        });
      });
    });
  };

  const createDestFolder = async () => {
    fs.mkdir(destFolder, (err) => {
      if (err) throw err;
    });
  };

  const checkDestFolder = async () => {
    fs.access(destFolder, async (err) => {
      if (err) await createDestFolder();
      else throw new Error('FS operation failed');
    });
  };

  const checkSourceFolder = async () => {
    fs.access(sourceFolder, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  };

  await checkSourceFolder();
  await checkDestFolder();
  copyFiles();
};

await copy();
