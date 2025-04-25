import { createReadStream, createWriteStream } from "fs";
import { access } from "fs/promises";
import path from "path";
import { createUnzip } from "zlib";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";

const decompress = async () => {
  // Write your code here

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const compressedFile = path.resolve(__dirname, "./files/archive.gz");
  const fileName = path.resolve(__dirname, "./files/uncompressedFile.txt");

  try {
    await access(compressedFile);

    const readable = createReadStream(compressedFile);
    const writable = createWriteStream(fileName);

    await pipeline(readable, createUnzip(), writable);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Compressed file not found");
    }
  }
};

await decompress();
