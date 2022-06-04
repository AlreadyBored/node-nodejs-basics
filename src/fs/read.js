import fs from "fs";

const read = async () => {
  fs.stat('src/fs/files/fileToRead.txt', function (err, stats) {
    if (err) {
      throw err('FS operation failed!');
    } else {
      fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
    }
  })
};

read();