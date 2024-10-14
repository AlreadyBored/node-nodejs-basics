const fs = require('fs');
const zlib = require('zlib');

const compressFile = (source, destination) => {
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  input.pipe(zlib.createBrotliCompress()).pipe(output);
};

module.exports = { compressFile };
