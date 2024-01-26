import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const gzip = createGzip();
  const rs = createReadStream("./src/zip/files/fileToCompress.txt");
  const ws = createWriteStream("./src/zip/files/archive.gz");

  rs.pipe(gzip).pipe(ws);
};

await compress();
