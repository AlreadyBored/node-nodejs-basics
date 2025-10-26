import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { join } from "node:path";

const decompress = async () => {
  const inputPath = join(process.cwd(), "src", "zip", "files", "archive.gz");
  const outputPath = join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );

  const readStream = createReadStream(inputPath);
  const writeStream = createWriteStream(outputPath);
  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
