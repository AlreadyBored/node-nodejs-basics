import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";

const decompress = async () => {
  const getFullPath = (fileName) =>
    path.join(process.cwd(), "src", "zip", "files", fileName);

  const archiveName = "archive.gz";
  const archivePath = getFullPath(archiveName);
  const archiveStream = fs.createReadStream(archivePath);

  const destFile = "fileToCompress.txt";
  const destPath = getFullPath(destFile);
  const destStream = fs.createWriteStream(destPath);

  archiveStream.pipe(zlib.createGunzip()).pipe(destStream);
};

await decompress();
