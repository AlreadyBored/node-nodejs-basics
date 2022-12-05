import fs from 'fs';

const create = async () => {
  fs.readdir('./files', (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const file = data.filter((file) => file === 'fresh.txt');
      if (file.length === 0) {
        console.log('create file');
        fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
          console.log('error', err);
        });
      } else {
        throw new Error('FS operation failed');
      }
    }
  });
};

await create();
