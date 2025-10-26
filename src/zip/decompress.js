import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { URL, fileURLToPath } from "node:url";

const decompress = async () => {
  // Write your code here
  const inputFileURL = new URL("./files/archive.gz", import.meta.url);
  const input = fileURLToPath(inputFileURL);

  const outputFileURL = new URL("./files/fileToCompress.txt", import.meta.url);
  const output = fileURLToPath(outputFileURL);

  const gunzip = createGunzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  try {
    await pipeline(source, gunzip, destination);
    console.log("Decompression complete!");
  } catch (err) {
    console.error("Decompression failed:", err);
  }
};

await decompress();
