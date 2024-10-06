import * as path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  const __dirname = import.meta.dirname;

  const unzip = createGunzip();
  const sourceStream = createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );
  const destinationStream = createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );

  sourceStream.pipe(unzip).pipe(destinationStream);

  destination.on("finish", () => {
    console.log("File successfully decompressed!");
  });

  destination.on("error", (err) => {
    console.error("Error during decompression:", err);
  });
};

await decompress();
