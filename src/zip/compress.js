import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createGzip } from "zlib";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const inputFilePath = join(__dirname, "files", "fileToCompress.txt");
  const outputFilePath = join(__dirname, "files", "archive.gz");

  const readableStream = createReadStream(inputFilePath);
  const writableStream = createWriteStream(outputFilePath);

  const gzipStream = createGzip();

  readableStream.pipe(gzipStream).pipe(writableStream);

  writableStream.on("fisnish", () => {});
};

await compress();
