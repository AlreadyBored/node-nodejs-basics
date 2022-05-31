import {cp, access} from "node:fs/promises";
import process from 'node:process';

export const copy = async () => {
  const currentDir = process.cwd();
  const subDir = '/src/fs'
  const src = '/files';
  const dest = '/files_copy';
  const absoluteSrcPath = currentDir + subDir + src;
  const absoluteDestPath = currentDir + subDir + dest;

  const STATUS_SUCCESS = 0;

  const accessResult = await access(absoluteSrcPath).catch(err => err);

  if (accessResult instanceof Error) {
    throw new Error('FS operation failed');
  }

  const cpResult = await cp(absoluteSrcPath, absoluteDestPath, {
    errorOnExist: true,
    force: false,
    recursive: true,
  }).catch(err => err);

  if (cpResult instanceof Error) {
    throw new Error('FS operation failed');
  }

  return STATUS_SUCCESS;
};

copy();