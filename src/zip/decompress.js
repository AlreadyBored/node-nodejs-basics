import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";

const pipe = promisify(pipeline);

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const source = createReadStream(
      new URL("./files/archive.gz ", import.meta.url)
    );
    const destination = createWriteStream(
      new URL("./files/fileToCompress.txt", import.meta.url)
    );

    await pipe(source, unzip, destination);
  } catch (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
};

await decompress();
