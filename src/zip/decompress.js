import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const unzip = zlib.createUnzip();

  const pathToFileToDecompress = path.join(__dirname, "files", "archive.gz");
  const pathToDecomressedFile = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(pathToFileToDecompress);
  const writeStream = fs.createWriteStream(pathToDecomressedFile);

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
