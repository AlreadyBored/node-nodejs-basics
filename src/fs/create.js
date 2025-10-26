import * as fs from "node:fs";

const create = async () => {
  const content = 'I am fresh and young';

  fs.readFile('./src/fs/files/fresh.txt', (err, data) => {
    if (!err && data) {
      throw new Error('FS operation failed')
    }
  });

  fs.writeFile('./src/fs/files/fresh.txt', content, err => {
    if(err){
      console.error(err)
      throw new Error('FS operation failed')
    }
  });
};

await create();
