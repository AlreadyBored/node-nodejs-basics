import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/archive.gz");
const pathToDecompressed = makePath(
  import.meta.url,
  "/files/fileToCompress.txt"
);

const decompress = async () => {
  const unzip = createGunzip();
  const source = createReadStream(path);
  const destination = createWriteStream(pathToDecompressed);

  const pipe = promisify(pipeline);

  await pipe(source, unzip, destination);
};

await decompress();
