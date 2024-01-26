import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const __dirname = import.meta.dirname;

const decompress = async () => {
  const unzip = createUnzip();
  const rs = createReadStream(__dirname + "/files/archive.gz");
  const ws = createWriteStream(__dirname + "/files/fileToCompress.txt");

  rs.pipe(unzip).pipe(ws);
};

await decompress();
