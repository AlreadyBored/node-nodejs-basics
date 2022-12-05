import fs from 'fs/promises';

const checkFileExistence = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const remove = async () => {
  const fileExists = await checkFileExistence('./src/fs/files/fileToRemove.txt');
  if (fileExists) await fs.unlink('./src/fs/files/fileToRemove.txt');
  else throw Error('FS operation failed');
};

await remove();