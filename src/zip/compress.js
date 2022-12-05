import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";

const compress = async () => {
  const getFullPath = (fileName) =>
    path.join(process.cwd(), "src", "zip", "files", fileName);

  const fileName = "fileToCompress.txt";
  const filePath = getFullPath(fileName);
  const fileStream = fs.createReadStream(filePath);

  const destFile = "archive.gz";
  const destPath = getFullPath(destFile);
  const destStream = fs.createWriteStream(destPath);

  fileStream.pipe(zlib.createGzip()).pipe(destStream);
};

await compress();
