import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorText = "FS operation failed";

const remove = async () => {
  const fileToRemove = path.join(__dirname, "fileToRemove.txt");

  try {
    // Check if file exists

    try {
      await fs.access(fileToRemove);
    } catch (error) {
      throw new Error(errorText);
    }

    await fs.unlink(fileToRemove);
  } catch (error) {
    throw new Error(errorText);
  }
};

await remove();
