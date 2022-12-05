import fs from 'fs/promises';

const checkForFile = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const copy = async () => {
  const folder1exists = await checkForFile('./src/fs/files');
  const folder2exists = await checkForFile('./src/fs/files_copy');
  if (folder1exists && !folder2exists) await fs.cp('./src/fs/files', './src/fs/files_copy', {recursive: true});
  else throw Error('FS operation failed');
};

copy();