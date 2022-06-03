export const create = async () => {
  let fs = require('fs');

  fs.writeFile('./files/fresh.txt', 'I am fresh and young', function (err) {
    if (err) throw err;
    console.log('FS operation failed');
  });
};
