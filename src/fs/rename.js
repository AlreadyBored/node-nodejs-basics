import fs from 'fs';

const rename = async () => {
  const src = './files/wrongFilename.txt';
  const newFile = './files/properFilename.md';

  const isSrc = fs.existsSync(src);
  const isNewFile = fs.existsSync(newFile);

  if (isSrc && !isNewFile) {
    fs.rename(src, newFile, (err) => err);
  } else {
    throw new Error('FS operation failed');
  }
};

await rename();
