import fs from 'fs';
const create = async () => {
  fs.appendFile('./files/fresh.txt', 'I am fresh and young', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};

await create();