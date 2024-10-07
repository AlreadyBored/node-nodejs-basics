import fs, { constants } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  const isSourceFolderExists = fs.existsSync(sourcePath);
  const isDestinationFolderExists = fs.existsSync(destinationPath);
  if (!isSourceFolderExists || isDestinationFolderExists) {
    throw new Error("FS operation failed");
  } else {
    fs.mkdirSync(destinationPath);
    const files = fs.readdirSync(sourcePath);
    files.forEach((file) => {
      fs.copyFileSync(
        path.join(sourcePath, `${file}`),
        path.join(destinationPath, `/${file}`),
        constants.COPYFILE_EXCL
      );
    });
  }
};

await copy();
