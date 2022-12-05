import fs from 'fs/promises';

const checkFileExistence = (file) => fs.access(file, fs.constants.F_OK).then(() => true).catch(() => false);

const list = async () => {
  const folderExists = await checkFileExistence('./src/fs/files');
  if (folderExists) {
    const files = await fs.readdir('./src/fs/files');
    console.log(files.join('\n'));
  }
  else throw Error('FS operation failed');
};

await list();