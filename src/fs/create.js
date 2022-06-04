import fs from "fs";

const create = async () => {
  fs.stat('src/fs/files/fresh.txt', function(err, stats) {
    if (err) {
      fs.appendFile('src/fs/files/fresh.txt', 'I am fresh and young', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    } else {
      throw err('FS operation failed!');
    }
  });
};

create();