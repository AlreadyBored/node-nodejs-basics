import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { exists } from "./vendors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const dirPath = path.join(__dirname, "files");

  if (!(await exists(dirPath))) {
    throw new Error("FS operation failed: files folder does not exist");
  }

  try {
    const files = await fs.readdir(dirPath);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    throw new Error("Error reading files from the directory");
  }
};

await read();
