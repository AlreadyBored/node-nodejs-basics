import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const compress = async () => {
  const source = createReadStream('src/zip/files/fileToCompress.txt');
  const destination = createWriteStream('src/zip/files/archive.gz');

  const gzipCompress = createGzip();

  pipeline(
    source,
    gzipCompress,
    destination,
    (err) => {
      if (err) {
        console.error("An error occurred in pipeline.", err);
      } else {
        console.log("File compressed successful");
      }
    }
  )
};

await compress();
