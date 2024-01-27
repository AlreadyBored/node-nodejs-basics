import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const file = "files/fileToCompress.txt";
  const archive = "files/archive.gz";
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream(archive);
  const output = fs.createWriteStream(file);
  input.pipe(unzip).pipe(output);
};

await decompress();

//decompress.js - implement function that decompresses archive.gz
//back to the fileToCompress.txt with same content as before compression
//using zlib and Streams API
