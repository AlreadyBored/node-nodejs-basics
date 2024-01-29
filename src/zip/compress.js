import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";

const compress = async () => {
  const gzip = createGzip();

  const fileToZip = createReadStream("./files/fileToCompress.txt");
  const zip = createWriteStream("./files/archive.gz");

  fileToZip.pipe(gzip).pipe(zip);
};

await compress();
