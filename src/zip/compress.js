import zlib from "zlib";
import fs from "fs";

const url = import.meta.url;
const path = new URL("./files/fileToCompress.txt", url);
const archive = new URL("./files/archive.gz", url);

const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream(path);
  const write = fs.createWriteStream(archive);

  read.pipe(zip).pipe(write);
};

await compress();
