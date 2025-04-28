import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { join } from "node:path";

const dirname = import.meta.dirname;

const decompress = async () => {
  const filePath = join(dirname, "files", "fileToCompress.txt");
  const archPath = join(dirname, "files", "archive.gz");

  const readable = createReadStream(archPath);
  const writable = createWriteStream(filePath);
  const gunzip = createGunzip();

  readable.pipe(gunzip).pipe(writable);

  readable.on("error", () => {
    throw new Error("FS operation failed");
  });
  writable.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await decompress();
