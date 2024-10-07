import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourceFilePath = path.join(__dirname, "files", "archive.gz");
  const destFilePath = path.join(__dirname, "files", "fileToCompress.txt");

  const sourceStream = fs.createReadStream(sourceFilePath);
  const destStream = fs.createWriteStream(destFilePath);

  const zipStream = createUnzip();
  sourceStream.pipe(zipStream).pipe(destStream);
};

await decompress();
