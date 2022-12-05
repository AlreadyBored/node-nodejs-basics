import fs from 'fs/promises';

const checkFileExistence = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const create = async () => {
  const fileExists = await checkFileExistence('./src/fs/files/fresh.txt');
  if (!fileExists) await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
  else throw Error('FS operation failed');
};

await create();