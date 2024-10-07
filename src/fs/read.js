import fs from 'fs';

const read = async () => {
  const filePath = 'src/fs/files/fileToRead.txt';
  if(fs.existsSync(filePath)){
    console.log(fs.readFileSync(filePath, 'utf-8', () => {}));
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  }
};

await read();