import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const __dirname = import.meta.dirname;

const compress = async () => {
  const gzip = createGzip();
  const rs = createReadStream(__dirname + "/files/fileToCompress.txt");
  const ws = createWriteStream(__dirname + "/files/archive.gz");

  rs.pipe(gzip).pipe(ws);
};

await compress();
