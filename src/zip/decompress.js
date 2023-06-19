import zlib from "zlib";
import fs from "fs";

const url = import.meta.url;
const path = new URL("./files/fileToCompress.txt", url);
const archive = new URL("./files/archive.gz", url);

const decompress = async () => {
  const zip = zlib.createUnzip();

  const read = fs.createReadStream(archive);
  const write = fs.createWriteStream(path);

  read.pipe(zip).pipe(write);
};

await decompress();
