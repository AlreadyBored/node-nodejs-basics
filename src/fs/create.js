import * as fs from 'fs';


const create = async () => {
    const content = 'I am fresh and young';
    fs.writeFile('fresh.txt', content, { flag: 'wx' }, err => {
  if (err) {
    console.error('FS operation failed');
  }
});
};

await create();