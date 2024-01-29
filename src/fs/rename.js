import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { exists } from "./vendors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIR = "files";

const rename = async () => {
  const fileDir = path.join(__dirname, DIR);

  const oldFilePath = path.join(fileDir, "wrongFilename.txt");
  const newFilePath = path.join(fileDir, "properFilename.md");

  if (!(await exists(oldFilePath)) || (await exists(newFilePath))) {
    throw new Error("FS operation failed");
  }

  await fs.rename(oldFilePath, newFilePath);
};

rename();
