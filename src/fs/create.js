import * as fs from 'fs';

const create = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  fs.readFile('./fs/files/fresh.txt', function (err, data) {
    !!data
    ?  throwErr('FS operation failed')
    : fs.writeFile('./fs/files/fresh.txt', 'I am fresh and young', function (err) { if (err) throwErr('FS operation failed') });
  });
};

await create();