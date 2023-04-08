import fs from "fs";

const copy = async () => {
  const srcPath = './src/fs/files';
  const targetPath = './src/fs/files_copy';
  const isSrcExist = fs.existsSync(srcPath);
  const isTargetExist = fs.existsSync(targetPath);

  if (isSrcExist && !isTargetExist) {
    fs.mkdir(targetPath, (err) => {
      if (err) throw new Error('FS operation failed');
    });
    fs.readdir('./src/fs/files', (err, files) => {
      if (err) throw new Error('FS operation failed');
      files.map(file => fs.copyFileSync(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`));
    });
  } else {
    throw new Error('FS operation failed');
  }
};

await copy();
