import fs from 'fs';

const create = async () => {
  const filePath = 'src/fs/files/fresh.txt';
  if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, 'I am fresh and young', { encoding: 'utf-8'}, () => {});
  } else {
    console.error('\x1b[31m%s\x1b[0m', new Error('FS operation failed'));
  }
};

await create();