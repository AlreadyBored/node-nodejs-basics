import fs from 'fs';

const rename = async () => {
  const currentFilePath = 'src/fs/files/wrongFilename.txt';
  const renamedPath = 'src/fs/files/properFilename.md';
  
  if(fs.existsSync(currentFilePath) && !fs.existsSync(renamedPath)){
    fs.rename(currentFilePath, renamedPath, () => {})
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  }
};

await rename();