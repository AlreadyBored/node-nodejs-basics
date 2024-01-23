import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const pathToRemoveFile = path.join(__dirname, "..", "fs", "files", "fileToRemove.txt");

  if (!fs.existsSync(pathToRemoveFile)) {
    throw new Error("FS operation failed");
  }

  fs.unlink(pathToRemoveFile, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\nFile was Removed\n");
    }
  });
};

await remove();
