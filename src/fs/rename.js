import fs from "fs";

const rename = async () => {
  const pathToFile = './src/fs/files';
  const oldPath = `${pathToFile}/wrongFilename.txt`;
  const newPath = `${pathToFile}/properFilename.md`;

  if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
    fs.rename(oldPath, newPath, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } else {
    throw new Error('FS operation failed');
  }
};

await rename();