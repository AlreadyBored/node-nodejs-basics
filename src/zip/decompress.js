import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  // Write your code here
  const pathToFile = fileURLToPath(
    new URL("./files/fileToCompress.txt", import.meta.url)
  );

  const pathToZip = fileURLToPath(
    new URL("./files/archive.txt.gz", import.meta.url)
  );

  const unZip = createUnzip();

  const src = createReadStream(pathToZip);

  const zipFile = createWriteStream(pathToFile);
  
  pipeline(src, unZip, zipFile, (err) => {
    if (err) {
      throw new Error("Operation is failed");
    }
  });
};

await decompress();