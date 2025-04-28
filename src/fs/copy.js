import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Ensure this import is included

// Derive __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcFolder = path.join(__dirname, "files");
  const destFolder = path.resolve(__dirname, "files_copy");

  try {
    // Check if source folder exists
    try {
      await fs.access(srcFolder);
    } catch {
      throw new Error("Source folder does not exist");
    }

    // Check if destination folder exists
    try {
      await fs.access(destFolder);
      throw new Error("Destination folder already exists");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error(`Failed to check destination folder: ${err.message}`);
      }
    }

    // Copy the entire folder (files only, non-recursive)
    const files = await fs.readdir(srcFolder, { withFileTypes: true });

    if (files.length === 0) {
      console.log("No files to copy in source folder");
      await fs.mkdir(destFolder);
      return;
    }

    // Create destination folder
    await fs.mkdir(destFolder);

    // Copy only files (skip directories)
    for (const file of files) {
      if (!file.isFile()) {
        console.log(`Skipping ${file.name}: not a file`);
        continue;
      }
      const srcPath = path.join(srcFolder, file.name);
      const destPath = path.join(destFolder, file.name);
      await fs.copyFile(srcPath, destPath);
    }

    console.log("Files copied successfully");
  } catch (err) {
    throw new Error(`Copy operation failed: ${err.message}`);
  }
};

try {
  await copy();
} catch (err) {
  console.error(err.message);
}
