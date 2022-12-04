import zlib from "node:zlib";
import fs from "node:fs";
import path from "node:path";

// decompress.js - implement function that decompresses archive.gz
// back to the fileToCompress.txt with same content as before compression using zlib and Streams API

const decompress = async () => {
  const dir = path.resolve(process.cwd(), "src", "zip", "files");

  const readableStream = fs.createReadStream(path.resolve(dir, "archive.gz"));
  const writableStream = fs.createWriteStream(
    path.resolve(dir, "fileToCompress.txt")
  );

  readableStream.pipe(zlib.createUnzip()).pipe(writableStream);
};

await decompress();
