import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fileToCompress.txt");

const compress = async () => {
  const rs = createReadStream(filePath);
  rs.pipe(createGzip())
    .pipe(createWriteStream(`${filePath}.gz`))
    .on("finish", () => {
      console.log("compression process is finished");
    });
};

await compress();
