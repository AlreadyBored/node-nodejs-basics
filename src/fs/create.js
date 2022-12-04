import fs from 'fs';

const create = async () => {

  const path = './files/fresh.txt';

  const cause = new Error('FS operation failed');

  fs.access(path, function (error) {
    if (error) {
      fs.appendFile('./files/fresh.txt', 'I am fresh and young', function (err) {
        if (err) throw err;
      });
    } else {
      console.log(cause);
    }
  });

};

await create();