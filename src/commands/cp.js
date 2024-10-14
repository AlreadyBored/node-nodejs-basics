import { createReadStream, createWriteStream } from "fs";
import fs from "fs/promises";
import path from "path";

export const cp = async (process, sourceFilePath, destinationDirPath) => {
  const sourceFullPath = path.resolve(process.cwd(), sourceFilePath);
  const destinationDirFullPath = destinationDirPath
    ? path.resolve(process.cwd(), destinationDirPath)
    : path.dirname(sourceFullPath);
  let baseName = path.basename(sourceFilePath);
  let destinationFullPath = path.join(destinationDirFullPath, baseName);

  let counter = 0;
  while (
    await fs
      .access(destinationFullPath)
      .then(() => true)
      .catch(() => false)
  ) {
    const nameWithoutExt = path.basename(baseName, path.extname(baseName));
    const ext = path.extname(baseName);
    destinationFullPath = path.join(
      destinationDirFullPath,
      `${nameWithoutExt} copy${counter > 0 ? ` (${counter})` : ""}${ext}`
    );
    counter++;
  }

  const readStream = createReadStream(sourceFullPath);
  const writeStream = createWriteStream(destinationFullPath);

  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(
      `File '${sourceFilePath}' has been copied to '${destinationFullPath}'.`
    );
  });

  writeStream.on("error", () => {
    console.log("Operation failed: Could not write the file.");
  });
};
