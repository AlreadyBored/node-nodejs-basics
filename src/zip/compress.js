import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  const write = fs.createWriteStream("./src/zip/files/archive.gz");
  read.pipe(zip).pipe(write);
  console.log("Zipped Successfully");
};

await compress();
