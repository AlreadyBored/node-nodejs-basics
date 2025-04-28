import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { join } from "node:path";

const dirname = import.meta.dirname;

const compress = async () => {
  const filePath = join(dirname, "files", "fileToCompress.txt");
  const archPath = join(dirname, "files", "archive.gz");

  const readable = createReadStream(filePath);
  const writable = createWriteStream(archPath);
  const gzip = createGzip();

  readable.pipe(gzip).pipe(writable);

  readable.on("error", () => {
    throw new Error("FS operation failed");
  });
  writable.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await compress();
