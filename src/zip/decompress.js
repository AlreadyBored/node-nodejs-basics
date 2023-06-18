import fs from"fs";
import zlib from "zlib";
let fileToCompress = './src/zip/files/fileToCompress.txt'
let compressedFile = './src/zip/archive.gz'

const decompress = async () => {
  let prepared = fs.createReadStream(compressedFile);
  let final = fs.createWriteStream(fileToCompress);
  let gzip = zlib.createUnzip();
  prepared.pipe(gzip).pipe(final);
};

await decompress();