import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const source = createReadStream('src/zip/files/archive.gz');
  const destination = createWriteStream('src/zip/files/fileToCompress.txt');

  const gzipCompress = createUnzip();

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

await decompress();
