import zlib from "zlib";
import fs from "fs";

export const decompress = async () => {
  const unzip = zlib.createUnzip();

  const read = fs.createReadStream("./files/archive.gz");
  const write = fs.createWriteStream("./files/fileToCompress.txt");
  read.pipe(unzip).pipe(write);
  console.log("unZipped Successfully");
};

decompress()