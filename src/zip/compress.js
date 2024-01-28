import fs from "fs";
import path from "path";

import { createGzip } from "node:zlib";

const targetFileName = "fileToCompress.txt";
const outputFileName = "archive.gz";
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

const compress = async () => {
  const gzip = createGzip();
  const readStreamInput = fs.createReadStream(pathToTargetFile);
  const writeStreamOutput = fs.createWriteStream(pathToOutputFile);
  readStreamInput.pipe(gzip).pipe(writeStreamOutput);
};

await compress();
