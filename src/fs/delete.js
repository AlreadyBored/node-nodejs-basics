import fs from 'fs';

const remove = async () => {
  const filePath = './files/fileToRemove.txt';
  const isFileToRemove = fs.existsSync(filePath);

  if (isFileToRemove) {
    fs.unlink(filePath, (err) => err);
  } else {
    throw new Error('FS operation failed');
  }
};

await remove();
