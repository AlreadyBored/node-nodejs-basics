import * as path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  const __dirname = import.meta.dirname;

  const gzip = createGzip();
  const sourceStream = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const destinationStream = createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );

  sourceStream.pipe(gzip).pipe(destinationStream);

  destinationStream.on("finish", () => {
    console.log("File successfully compressed!");
  });

  destinationStream.on("error", (err) => {
    console.error("Error during compression:", err);
  });
};

await compress();
