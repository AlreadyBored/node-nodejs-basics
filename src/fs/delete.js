import fs from 'fs';

const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt';
  if(fs.existsSync(filePath)){
    fs.unlink(filePath, () => {})
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  } 
};

await remove();