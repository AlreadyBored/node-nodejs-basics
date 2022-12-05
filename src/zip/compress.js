import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { resolve } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";

import { DIR_NAME, FILE_NAME, ZIP_NAME } from "./constants.js";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const filePath = resolve(__filename, "../", DIR_NAME, FILE_NAME);
  const gzPath = resolve(__filename, "../", DIR_NAME, ZIP_NAME);

  await pipeline(
    createReadStream(filePath),
    createGzip(),
    createWriteStream(gzPath)
  );
};

await compress();
