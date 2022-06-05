import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
  const oldFile = path.join(__dirname, "files", "wrongFilenames.txt");
  const newFile = path.join(__dirname, "files", "properFilename.md");

  try {
    const stat = await fs.stat(newFile);
    if (stat) {
      throw Error("FS operation failed");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.rename(oldFile, newFile);
      } catch (error) {
        if (error.code === "ENOENT") throw Error("FS operation failed");
        throw Error(error);
      }
    } else {
      throw Error(error);
    }
  }
};

await rename();
