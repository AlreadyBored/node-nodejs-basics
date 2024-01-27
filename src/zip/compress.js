import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const file = "files/fileToCompress.txt";
  const archive = "files/archive.gz";
  const gzip = zlib.createGzip();
  const input = fs.createReadStream(file);
  const output = fs.createWriteStream(archive);
  input.pipe(gzip).pipe(output);
};

await compress();

//compress.js - implement function that compresses file fileToCompress.txt
//to archive.gz using zlib and Streams API
