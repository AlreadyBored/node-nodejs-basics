const fs = require('fs');
const currentFolder = './src/fs/files';

const list = async () => {
  if (!fs.existsSync(currentFolder)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.readdirSync(currentFolder).forEach(file => {
      console.log(file);
    });
  }
};

list();