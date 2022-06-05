const compress = async () => {
  const fs = require('fs');
  const zlib = require('zlib');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/fileToCompress.txt');
  let fileWrite = path.join(__dirname, './files/archive.gz');
  const readStream = fs.createReadStream(fileToRead);
  const writeStream = fs.createWriteStream(fileWrite);
  const compressStream = zlib.createGzip();

  const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
  };

  readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);
};

compress();

