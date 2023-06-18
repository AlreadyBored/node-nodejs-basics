let fs = require('fs');
let dir = './src/fs/files'
let dirCopy = './src/fs/files_copy'

const copy = async () => {
  if (!fs.existsSync(dir)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.cp(dir, dirCopy, { recursive: true }, (err) => {
      if (err) {
        console.error(new Error('FS operation failed'));
      }
    });
  }
};

copy();
