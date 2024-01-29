import fs from 'fs'
const rename = async () => {
  const existstxt = fs.existsSync('src/fs/files/wrongFilename.txt');
  const existsmd = fs.existsSync('src/fs/files/properFilename.md');
  if(!existstxt || existsmd) throw new Error('FS operation failed');
  else fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', () => {});
};

await rename();
