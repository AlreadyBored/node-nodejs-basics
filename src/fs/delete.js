import fs from "fs";

const remove = async () => {
  fs.stat('src/fs/files/fileToRemove.txt', function (err, stats) {
    if (err) {
      throw err('FS operation failed!');
    } else {
      fs.unlink('src/fs/files/fileToRemove.txt', function (err) {
        if (err) throw err;
        console.log('Done!');
      });
    }
  });
};

remove();