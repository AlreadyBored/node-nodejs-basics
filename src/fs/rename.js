import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

//Derive __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorText = "FS operation failed";

const rename = async () => {
  const srcFile = path.join(__dirname, "wrongFilename.txt");
  const destFile = path.join(__dirname, "properFilename.md");

  try {
    // Check if source file exists
    try {
      await fs.access(srcFile);
    } catch (error) {
      throw new Error(errorText);
    }
    // Check if destination file exists
    try {
      await fs.access(destFile);
      throw new Error(errorText);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error(errorText);
      }
    }

    // Rename the file
    await fs.rename(srcFile, destFile);
  } catch (error) {
    throw new Error(errorText);
  }
};

await rename();
