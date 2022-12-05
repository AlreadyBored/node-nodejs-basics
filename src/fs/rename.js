import fs from 'fs/promises';

const checkFileExistence = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const rename = async () => {
  const file1exists = await checkFileExistence('./src/fs/files/wrongFilename.txt');
  const file2exists = await checkFileExistence('./src/fs/files/properFilename.md');
  if (file1exists && !file2exists) await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
  else throw Error('FS operation failed');
};

await rename();