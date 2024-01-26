import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const decompress = async () => {
  const unzip = createUnzip();
  const rs = createReadStream("./src/zip/files/archive.gz");
  const ws = createWriteStream("./src/zip/files/fileToCompress2.txt");

  rs.pipe(unzip).pipe(ws);
};

await decompress();
