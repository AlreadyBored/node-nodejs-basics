const fs = require('fs');
const zlib = require('zlib');

const decompressFile = (source, destination) => {
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  input.pipe(zlib.createBrotliDecompress()).pipe(output);
};

module.exports = { decompressFile };
