const read = async () => {
  const fs = require('fs');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/fileToRead.txt');

  fs.createReadStream(fileToRead, 'utf8')
    .pipe(process.stdout)
    .on('error', () => {
      console.log('error');
    });
};

read();

