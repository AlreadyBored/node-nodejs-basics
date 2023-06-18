let fs = require('fs');
let oldFileName = './src/fs/files/wrongFilename.txt'
let newFileName = './src/fs/files/properFilename.md'

const rename = async () => {
  if (fs.existsSync(newFileName)) {
    console.log(new Error('FS operation failed'))
  } else if (!fs.existsSync(oldFileName)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.rename(oldFileName, newFileName, err => {
      if(err) throw err;
    });
  }
};

rename();