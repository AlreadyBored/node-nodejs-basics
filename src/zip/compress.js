const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

const compress = async () => {
  const readStream = fs.createReadStream(filePath);
  const gzipStream = zlib.createGzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  pipeline(
    readStream,
    gzipStream,
    writeStream,
    (error) => {
      if (error) {
        console.error(`Compression failed: ${error.message}`);
      } else {
        console.log(`File compressed to ${outputFilePath}`);
      }
    }
  );
};

const filePath = 'fileToCompress.txt';
const outputFilePath = 'archive.gz';

await compress(filePath, outputFilePath);