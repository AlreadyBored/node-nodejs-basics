import fs from 'node:fs';
import stream from 'node:stream';
import zlib from 'node:zlib';

const decompress = async () => {
  const sourceFilePath = './src/zip/files/archive.gz';
  const targetFilePath = './src/zip/files/fileToCompress.txt';

  const unzip = zlib.createUnzip();
  const source = fs.createReadStream(sourceFilePath);
  const destination = fs.createWriteStream(targetFilePath);

  stream.pipeline(source, unzip, destination, (err) => {
    if (err) {
      throw new Error(err)
    }
  })
};

await decompress();
