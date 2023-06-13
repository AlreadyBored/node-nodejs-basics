import z from "node:zlib";
import { joinToURL } from "../helpers.js";
import fs from "node:fs";

const compress = async () => {
  const readPath = joinToURL(import.meta.url, "files", "fileToCompress.txt");
  const archivePath = joinToURL(import.meta.url, "files", "archive.gz");

  const read = fs.createReadStream(readPath);
  const write = fs.createWriteStream(archivePath);
  const gzip = z.createGzip();

  read.pipe(gzip).pipe(write);
};

await compress();
