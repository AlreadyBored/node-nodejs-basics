const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

const decompress = async () => {
  const readStream = fs.createReadStream(archiveFilePath);
  const gunzipStream = zlib.createGunzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  pipeline(
    readStream,
    gunzipStream,
    writeStream,
    (error) => {
      if (error) {
        console.error(`Decompression failed: ${error.message}`);
      } else {
        console.log(`File decompressed to ${outputFilePath}`);
      }
    }
  );
};

const archiveFilePath = 'archive.gz';
const outputFilePath = 'fileToCompress.txt';

await decompress(archiveFilePath, outputFilePath);