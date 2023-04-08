import fs from 'fs';

const create = async () => {
  const pathToFile = './src/fs/files/fresh.txt';
  const isFileExist = fs.existsSync(pathToFile);

  if (isFileExist) {
    throw new Error('FS operation failed');
  } else {
    fs.writeFile(pathToFile, 'I am fresh and young', (err) => {
      if (err) throw new Error('FS operation failed');
    });
  }
};

await create();