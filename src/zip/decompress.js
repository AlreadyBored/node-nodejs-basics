import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const rs = createReadStream(`${filePath}.gz`);
  rs.pipe(createUnzip())
    .pipe(createWriteStream(fileName))
    .on("finish", () => {
      console.log("decompression process is finished");
    });
};

await decompress();
