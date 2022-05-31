import {writeFile, access} from "node:fs/promises";
import process from 'node:process';

export const create = async () => {
  const filename = 'fresh.txt';
  const content = 'I am fresh and young';
  const absoluteFilePath = process.cwd() + '/src/fs/files/' + filename;
  const STATUS_SUCCESS = 0;
  const STATUS_FAILURE = 1;

  const accessResult = await access(absoluteFilePath).catch(err => err);

  if (!accessResult) {
    throw new Error('FS operation failed');
  }

  try {
    await writeFile(absoluteFilePath, content);
  } catch (e) {
    return STATUS_FAILURE;
  }

  return STATUS_SUCCESS;
};

create();