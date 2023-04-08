import zlib from "zlib";
import fs from "fs";
import stream from "stream";

const compress = async () => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream('./src/zip/files/fileToCompress.txt');
  const destination = fs.createWriteStream('./src/zip/files/archive.gz');

  stream.pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();