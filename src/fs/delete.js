let fs = require('fs');
let deleteFile = './src/fs/files/fileToRemove.txt'

const remove = async () => {
  if(!fs.existsSync(deleteFile)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.unlink(deleteFile, err => {
      if(fs.existsSync(deleteFile)) throw err;
    });
  }
};

remove();