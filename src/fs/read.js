import fs from 'fs/promises';

const checkFileExistence = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const read = async () => {
  const fileExists = await checkFileExistence('./src/fs/files/fileToRead.txt');
  if (fileExists) console.log(await fs.readFile('./src/fs/files/fileToRead.txt', 'utf-8'));
  else throw Error('FS operation failed');
};

await read();