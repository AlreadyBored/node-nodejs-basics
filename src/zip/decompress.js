import { createUnzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = path.resolve(__dirname, "files", "fileToCompress.txt");
  const pathToDecompress = path.resolve(__dirname, "files", "archive.gz");

  const unzip = createUnzip();

  const fileToZip = createReadStream(pathToDecompress);
  const zip = createWriteStream(pathToFile);

  fileToZip.pipe(unzip).pipe(zip);
};

await decompress();
