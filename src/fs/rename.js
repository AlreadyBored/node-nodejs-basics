import { access, constants, copyFile } from 'fs/promises';

const rename = async () => {
  const path = './src/fs/files';
  const wrongFilename = `${path}/wrongFilename.txt`;

  try {
    await access(wrongFilename);
    await copyFile(wrongFilename, `${path}/properFilename.md`, constants.COPYFILE_EXCL);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
