import zlib from "zlib";
import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const compress = async () => {
  const { __dirname } = getPath(import.meta.url);
  const pathRead = path.join(__dirname, "/files", "fileToCompress.txt");
  const pathWrite = path.join(__dirname, "/files", "archive.gz");

  const streamRead = fs.createReadStream(pathRead);
  const streamWrite = fs.createWriteStream(pathWrite);
  const compress = zlib.createGzip();

  streamRead.pipe(compress).pipe(streamWrite);
};

await compress();
