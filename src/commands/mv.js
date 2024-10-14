import { createReadStream, createWriteStream } from "fs";
import fs from "fs/promises";
import path from "path";

export const mv = async (process, sourceFilePath, destinationDirPath) => {
  const sourceFullPath = path.resolve(process.cwd(), sourceFilePath);

  const destinationDirFullPath = destinationDirPath
    ? path.resolve(process.cwd(), destinationDirPath)
    : path.dirname(sourceFullPath);

  let baseName = path.basename(sourceFilePath);
  const destinationFullPath = path.join(destinationDirFullPath, baseName);

  let counter = 1;
  let finalDestinationFullPath = destinationFullPath;
  while (
    await fs
      .access(finalDestinationFullPath)
      .then(() => true)
      .catch(() => false)
  ) {
    const nameWithoutExt = path.basename(baseName, path.extname(baseName));
    const ext = path.extname(baseName);
    finalDestinationFullPath = path.join(
      destinationDirFullPath,
      `${nameWithoutExt}_copy${counter}${ext}`
    );
    counter++;
  }

  const readStream = createReadStream(sourceFullPath);
  const writeStream = createWriteStream(finalDestinationFullPath);

  readStream.pipe(writeStream);

  writeStream.on("finish", async () => {
    await fs.unlink(sourceFullPath);
    console.log(
      `File '${sourceFilePath}' has been moved to '${finalDestinationFullPath}'.`
    );
  });

  writeStream.on("error", () => {
    console.log("Operation failed: Could not write the file.");
  });
};
