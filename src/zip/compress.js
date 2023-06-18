import fs from"fs";
import zlib from "zlib";
let fileToCompress = './src/zip/files/fileToCompress.txt'
let compressedFile = './src/zip/archive.gz'

const compress = async () => {
  let prepared = fs.createReadStream(fileToCompress, "utf8");
  let final = fs.createWriteStream(compressedFile);
  let gzip = zlib.createGzip();
  prepared.pipe(gzip).pipe(final);
};

await compress();