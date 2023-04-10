import fs from 'fs';

const rename = async () => {
  const sourcePath = new URL('./files/wrongFilename.txt', import.meta.url).pathname;
  const destinationPath = new URL('./files/properFilename.md', import.meta.url).pathname;

  if (!fs.existsSync(sourcePath)) {
    throw new Error('FS operation failed: source file does not exist');
  }

  if (fs.existsSync(destinationPath)) {
    throw new Error('FS operation failed: destination file already exists');
  }

  fs.renameSync(sourcePath, destinationPath);
};

await rename();
