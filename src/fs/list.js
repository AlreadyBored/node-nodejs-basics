import fs from 'fs';
const path = './files';

const list = async () => {
  fs.readdir(path, (err, files) => {
      if (err) {
          throw err.message;
      }
      console.log(files);
  })
};

await list();


// list.js - implement function that prints array of all filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)