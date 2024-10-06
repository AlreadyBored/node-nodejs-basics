import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createGunzip } from "zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const inputFilePath = join(__dirname, "files", "archive.gz");
  const outputFilePath = join(__dirname, "files", "fileToCompress.txt");

  const readableStream = createReadStream(inputFilePath);
  const writableStream = createWriteStream(outputFilePath);

  const gzipStream = createGunzip();

  readableStream.pipe(gzipStream).pipe(writableStream);

  writableStream.on("fisnish", () => {});
};

await decompress();
