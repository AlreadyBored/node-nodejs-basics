import { createUnzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";

const decompress = async () => {
  const unzip = createUnzip();

  const fileToZip = createReadStream("./files/archive.gz");
  const zip = createWriteStream("./files/fileToCompress.txt");

  fileToZip.pipe(unzip).pipe(zip);
};

await decompress();
