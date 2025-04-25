import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, "files", "fileToCompress.txt");
const archiveFile = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(archiveFile);
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
