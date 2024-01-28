import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { createGunzip, createGzip, gzip, unzip } from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, "files");

const decompress = async () => {
  const unzip = createGunzip();
  const archive = createReadStream(path.join(filesFolder, "archive.gz"));
  const textFile = createWriteStream(
    path.join(filesFolder, "fileToCompress.txt")
  );
  archive.pipe(unzip).pipe(textFile);
};

await decompress();
