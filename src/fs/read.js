import * as fs from 'fs';

const read = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  readFile('./fs/files/', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

await read();