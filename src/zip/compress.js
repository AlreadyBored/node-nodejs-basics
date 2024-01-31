import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFileForCompress = path.resolve(__dirname, "files", "fileToCompress.txt");
  const pathToZipName = path.resolve(__dirname, "files", "archive.gz");

  const gzip = createGzip();

  const fileToZip = createReadStream(pathToFileForCompress);
  const zip = createWriteStream(pathToZipName);

  fileToZip.pipe(gzip).pipe(zip);
};

await compress();
