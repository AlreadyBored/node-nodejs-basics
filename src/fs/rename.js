import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const rename = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceCopyFilePath = path.join(__dirname, "files", "wrongFilename.txt");
  const isSourceCopiedFileExists = fs.existsSync(sourceCopyFilePath);
  const destinationCopiedFilePath = path.join(
    __dirname,
    "files",
    "properFilename.md"
  );

  const isDestinationCopiedFileExists = fs.existsSync(
    destinationCopiedFilePath
  );
  if (!isSourceCopiedFileExists || isDestinationCopiedFileExists) {
    throw new Error("FS operation failed");
  } else {
    fs.renameSync(sourceCopyFilePath, destinationCopiedFilePath);
  }
};

await rename();
