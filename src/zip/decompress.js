import * as fs from "fs";
import { createUnzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const out = fs.createWriteStream(__dirname + "/files/fileToCompress.txt");
  const compressFile = fs.createReadStream(__dirname + "/files/archive.gz");
  compressFile.pipe(createUnzip()).pipe(out);
};

decompress();
