import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const unzip = zlib.createUnzip();

  const read = fs.createReadStream("./src/zip/files/archive.gz");
  const write = fs.createWriteStream("./src/zip/files/fileToCompress.txt");
  read.pipe(unzip).pipe(write);
  console.log("unZipped Successfully");
};

await decompress();
