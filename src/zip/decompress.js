import fs from "fs";
import path from "path";

import zlib from "node:zlib";

const targetFileName = "archive.gz";
const outputFileName = "fileToCompress.txt";

const targetFolderName = "files";
const currentFolder = process.cwd();

const pathToTargetFile = path.join(
  currentFolder,
  targetFolderName,
  targetFileName
);

const pathToOutputFile = path.join(
  currentFolder,
  targetFolderName,
  outputFileName
);

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const readStreamInput = fs.createReadStream(pathToTargetFile);
  const writeStreamOutput = fs.createWriteStream(pathToOutputFile);

  readStreamInput.pipe(gunzip).pipe(writeStreamOutput);

  writeStreamOutput.on("finish", () => {
    console.log("File decompressed successfully.");
  });
};

await decompress();
