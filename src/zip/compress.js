import * as fs from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const compressFile = fs.createReadStream(__dirname + "/files/fileToCompress.txt");
  const out = fs.createWriteStream(__dirname + "/files/archive.gz");
  compressFile.pipe(createGzip()).pipe(out);
};
compress()