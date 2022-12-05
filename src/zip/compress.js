import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/fileToCompress.txt");
const pathToCompressed = makePath(import.meta.url, "/files/archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(path);
  const destination = createWriteStream(pathToCompressed);

  const pipe = promisify(pipeline);

  await pipe(source, gzip, destination);
};

await compress();
