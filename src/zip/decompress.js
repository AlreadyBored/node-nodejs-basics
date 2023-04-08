import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const unzip = zlib.createUnzip();

  const source = fs.createReadStream('./src/zip/files/archive.gz');
  const destination = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

  source.pipe(unzip).pipe(destination);
};

await decompress();