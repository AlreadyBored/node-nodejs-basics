import * as fs from 'fs';

const list = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  fs.readdir('./fs/files', (err, files) => {
    if (err) throwErr('FS operation failed');
    console.log(files);
  })
};

await list();