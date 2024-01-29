import fs from "fs";
import zlib from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const source = fs.createReadStream(join(__dirname, "files", "archive.gz"));
  const destination = fs.createWriteStream(
    join(__dirname, "files", "fileToCompress.txt")
  );

  source.pipe(gunzip).pipe(destination);
};

await decompress();
