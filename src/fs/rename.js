import * as fs from 'fs';

const rename = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  fs.rename('./fs/files/wrongFilename.txt', './fs/files/properFilename.md', function (err) { if (err) throwErr('FS operation failed')})
};

await rename();