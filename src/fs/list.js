import fs from "fs";

const list = async () => {
  fs.stat('src/fs/files', function (err, stats) {
    if (err) {
      throw err('FS operation failed!');
    } else {
      fs.readdir('src/fs/files', (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
    }
  })
};

list();