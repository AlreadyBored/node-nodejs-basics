import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { createGzip } from "node:zlib";

const compress = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourceFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destFilePath = path.join(__dirname, "files", "archive.gz");

  const sourceStream = fs.createReadStream(sourceFilePath);
  const destStream = fs.createWriteStream(destFilePath);

  const gzipStream = createGzip();
  sourceStream.pipe(gzipStream).pipe(destStream);
};

await compress();
