import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";

const pipe = promisify(pipeline);

const compress = async () => {
  try {
    const gzip = createGzip();
    const source = createReadStream(
      new URL("./files/fileToCompress.txt", import.meta.url)
    );
    const destination = createWriteStream(
      new URL("./files/archive.gz", import.meta.url)
    );

    await pipe(source, gzip, destination);
  } catch (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
};

await compress();
