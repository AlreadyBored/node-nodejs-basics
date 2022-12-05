import zlib from "zlib";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const decompressFilePath = path.resolve(__dirname, "./files", "archive.gz");

  await fsPromises.access(
    decompressFilePath,
    fs.constants.F_OK,
    (error, data) => {
      if (error) {
        console.log("File does not exist");
      }
    }
  );

  const inp = fs.createReadStream(decompressFilePath);
  const out = fs.createWriteStream(
    path.resolve(__dirname, "./files", "textToCompress.txt")
  );
  const unzip = zlib.createUnzip();

  inp.pipe(unzip).pipe(out);
};

await decompress();
