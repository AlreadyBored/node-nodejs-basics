const transform = async () => {
  const fs = require('fs');
  const path = require('path');

  let fileToRead = path.join(__dirname, './files/fileToRead.txt');

  const processWriteable = fs
    .createReadStream(fileToRead, 'utf8')
    .pipe(process.stdout);
  let writeableStream = fs.createWriteStream('hello.txt');
  writeableStream.write(processWriteable);
};
transform();
