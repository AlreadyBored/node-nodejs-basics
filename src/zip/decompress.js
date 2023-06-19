import zlib from "zlib";
import fs from "fs";
import getPath from "../helper/getPath.js";

const decompress = async (gzipFile, outputFile) => {
  const gzipStream = fs.createReadStream(gzipFile);
  const outputStream = fs.createWriteStream(outputFile);

  const gunzip = zlib.createGunzip();

  gzipStream.pipe(gunzip).pipe(outputStream);
};

const archive = getPath(import.meta, "files", "archive.gz");
const fileToCompress = getPath(import.meta, "files", "fileToCompress.txt");

await decompress(archive, fileToCompress);
