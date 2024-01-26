import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = zlib.createGzip();

  const pathToFileToCompress = path.join(__dirname, "files", "fileToCompress.txt");
  const pathToComressedFile = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(pathToFileToCompress);
  const writeStream = fs.createWriteStream(pathToComressedFile);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
