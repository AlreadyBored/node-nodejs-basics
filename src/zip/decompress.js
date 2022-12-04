import zlib from "zlib";
import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const decompress = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathWrite = path.join(__dirname, "/files", "fileToCompress.txt");
  const pathRead = path.join(__dirname, "/files", "archive.gz");

  const streamRead = fs.createReadStream(pathRead);
  const streamWrite = fs.createWriteStream(pathWrite);
  const decompress = zlib.createGunzip();

  streamRead.pipe(decompress).pipe(streamWrite);
};

await decompress();
