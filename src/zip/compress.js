import zlib from "zlib";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const compressFilePath = path.resolve(
    __dirname,
    "./files",
    "fileToCompress.txt"
  );
  await fsPromises.access(
    compressFilePath,
    fs.constants.F_OK,
    (error, data) => {
      if (error) {
        console.log("File does not exist");
      }
    }
  );

  const inp = fs.createReadStream(compressFilePath);
  const out = fs.createWriteStream(
    path.resolve(__dirname, "./files", "archive.gz")
  );
  const zip = zlib.createGzip();

  inp.pipe(zip).pipe(out);
};

await compress();
