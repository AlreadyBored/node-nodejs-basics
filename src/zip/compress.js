import {createGzip} from 'zlib';
import fs from "fs";
import {dirname} from "path";
import {fileURLToPath} from "url";
import stream from "stream";

const gzip = createGzip();

const compress = async () => {
  const dir = dirname(fileURLToPath(import.meta.url))
  const source = fs.createReadStream(`${dir}/files/fileToCompress.txt`);
  const destination = fs.createWriteStream(`${dir}/files/archive.gz`);

  stream.pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('Zip operation failed', err);
      process.exitCode = 1;
    }
  });
};

await compress();
