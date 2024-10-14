import { chdir, cwd } from 'process';
import { resolve, dirname } from 'path';
import { readdir } from 'fs/promises';

export const cd = (path) => {
  try {
    chdir(resolve(path));
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', e.message);
  }
};

export const up = () => {
  try {
    const parentDitectory = dirname(cwd());
    chdir(parentDitectory);
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'You can`t go up', e);
  }
};

export const ls = async () => {
  try {
    const currentWorkingDir = cwd();
    const dirs = [];
    const files = [];
    const catalog = await readdir(currentWorkingDir, { withFileTypes: true });
    catalog.forEach((item) => {
      if (item.isDirectory()) {
        dirs.push({ Name: item.name, Type: 'directory' });
      } else {
        files.push({ Name: item.name, Type: 'file' });
      }
    });
    files.sort((a, b) => {
      return a - b;
    });
    dirs.sort((a, b) => {
      return a - b;
    });
    console.table(files.concat(dirs));
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', e.message);
  }
};
