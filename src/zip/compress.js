import fs from "fs";
import zlib from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(
    join(__dirname, "files", "fileToCompress.txt")
  );
  const destination = fs.createWriteStream(
    join(__dirname, "files", "archive.gz")
  );

  source.pipe(gzip).pipe(destination);
};

await compress();
