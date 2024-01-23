import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const pathToWrongNamedFile = path.join(__dirname, "..", "fs", "files", "wrongFilename.txt");
  const pathToCorrectNamedFile = path.join(__dirname, "..", "fs", "files", "properFilename.md");

  if (!fs.existsSync(pathToWrongNamedFile) || fs.existsSync(pathToCorrectNamedFile)) {
    throw new Error("FS operation failed");
  }

  fs.rename(pathToWrongNamedFile, pathToCorrectNamedFile, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("\nFile was Renamed\n");
    }
  });
};

await rename();
