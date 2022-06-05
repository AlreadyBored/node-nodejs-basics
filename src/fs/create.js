import fs from 'fs';
export const create = async () => {
  fs.stat('./files/fresh.txt', function (err, stat) {
    if (err == null) {
      console.log('FS operation failed');
    } else if (err.code === 'ENOENT') {
      // file does not exist
      fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
        if (err) {
          console.log('file write error', err);
        }
      });
    } else {
      console.log('Some other error: ', err.code);
    }
  });
};

create();
