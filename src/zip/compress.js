import zlib from "zlib";
import fs from "fs";
import getPath from "../helper/getPath.js";

const formatFilePath = (file) => {
  return file.replace(getPath(import.meta, "..", ".."), "~");
};

const compress = async (gzipFile, inputFile) => {
  const gzipStream = fs.createWriteStream(gzipFile);
  const inputStream = fs.createReadStream(inputFile);

  const gzip = zlib.createGzip();

  inputStream.pipe(gzip).pipe(gzipStream);

  console.log(
    `adding: ${formatFilePath(inputFile)} to ${formatFilePath(gzipFile)}`
  );
};

const archive = getPath(import.meta, "files", "archive.gz");
const fileToCompress = getPath(import.meta, "files", "fileToCompress.txt");

await compress(archive, fileToCompress);
