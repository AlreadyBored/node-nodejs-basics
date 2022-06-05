const write = async () => {
  const fs = require('fs');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/fileToRead.txt');
  let fileToWrite = path.join(__dirname, './files/fileToWrite.txt');
  let readableStream = fs.createReadStream(fileToRead, 'utf8');
  readableStream.on('data', function (chunk) {
    let writeableStream = fs.createWriteStream(fileToWrite);
    writeableStream.write(chunk);
  });
};
write();

