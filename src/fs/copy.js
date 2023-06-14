import * as fs from 'fs';

const copy = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  fs.readdir('./fs/files',(err) => {
    if (err) {
      throwErr('FS operation failed')
    } else {
      fs.mkdir('./fs/files_copy/',(err) => {
        if (err) throwErr('FS operation failed');
      });

      fs.readdirSync('./fs/files').forEach(file => {
        fs.copyFile(`./fs/files/${file}`, `./fs/files_copy/${file}`, function (err) {
         if (err) throwErr('FS operation failed');
        });
      });
    };
  });
};

await copy();
