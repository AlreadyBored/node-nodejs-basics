import z from "node:zlib";
import { joinToURL } from "../helpers.js";
import fs from "node:fs";

const decompress = async () => {
  const archivePath = joinToURL(import.meta.url, "files", "archive.gz");
  const writePath = joinToURL(import.meta.url, "files", "fileToCompress.txt");

  const read = fs.createReadStream(archivePath);
  const write = fs.createWriteStream(writePath);
  const ungzip = z.createGunzip();

  read.pipe(ungzip).pipe(write);
};

await decompress();
