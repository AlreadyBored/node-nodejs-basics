let fs = require('fs');
let fileToRead = './src/fs/files/fileToRead.txt'

const read = async () => {
  if (!fs.existsSync(fileToRead)) {
    console.log(new Error('FS operation failed'))
  } else {
    fs.readFile(fileToRead, 'utf8',function(err, data){
      console.log(data)
    });
  }
};

read();