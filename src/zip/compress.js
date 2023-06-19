import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const compress = async () => {
  await pipeline(createReadStream(`${dirName}/files/fileToCompress.txt`), createGzip(), createWriteStream(`${dirName}/files/archive.gz`));
};

await compress();