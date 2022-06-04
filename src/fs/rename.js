import fs from "fs";

const rename = async () => {
  fs.stat('src/fs/files/properFilename.md', function (err, stats) {
    if (err) {
      fs.stat('src/fs/files/wrongFilename.txt', function (err, stats) {
        if (err) {
          throw err('FS operation failed!');
        } else {
          fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', function (err) {
            if (err) throw err;
            console.log('Done!');
          });
        }
      });
    } else {
      throw err('FS operation failed!');
    }
  })
};

rename();