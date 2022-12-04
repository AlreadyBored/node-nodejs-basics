import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";

// compress.js - implement function that compresses file fileToCompress.txt
// to archive.gz using zlib and Streams API

const compress = async () => {
  // Write your code here
  const dir = path.resolve(process.cwd(), "src", "zip", "files");

  const readableStream = fs.createReadStream(
    path.resolve(dir, "fileToCompress.txt")
  );
  const writableStream = fs.createWriteStream(path.resolve(dir, "archive.gz"));

  readableStream.pipe(zlib.createGzip()).pipe(writableStream);
};

await compress();
