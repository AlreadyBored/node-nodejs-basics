import zlib from "zlib";
import fs from "fs";

export const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream("./files/fileToCompress.txt");
  const write = fs.createWriteStream("./files/archive.gz");
  read.pipe(zip).pipe(write);
  console.log("Zipped Successfully");
};

compress()
