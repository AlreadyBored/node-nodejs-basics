import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  // Write your code here
  const errMsg = "FS operation failed";
  try {
    await fs.rename(
      path.join(__dirname, "/files", "wrongFilename.txt"),
      path.join(__dirname, "/files", "properFilename.md")
    );
  } catch (err) {
    throw new Error(errMsg);
  }
};

await rename();
