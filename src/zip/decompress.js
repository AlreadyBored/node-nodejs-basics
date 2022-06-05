const decompress = async () => {
  const fs = require('fs');
  const zlib = require('zlib');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/archive.gz');
  let fileWrite = path.join(__dirname, './files/fileToCompress.txt');

  const readStream = fs.createReadStream(fileToRead);
  const writeStream = fs.createWriteStream(fileWrite);
  const unzip = zlib.createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
  console.log('unZipped Successfully');
};

decompress();

