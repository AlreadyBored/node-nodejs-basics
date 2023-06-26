import fs from 'node:fs';
import stream from 'node:stream';
import zlib from 'node:zlib';

const compress = async () => {
  const sourceFilePath = './src/zip/files/fileToCompress.txt';
  const targetFilePath = './src/zip/files/archive.gz';

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(sourceFilePath);
  const destination = fs.createWriteStream(targetFilePath);

  stream.pipeline(source, gzip, destination, (err) => {
    if (err) {
      throw new Error(err)
    }
  })
};

await compress();
