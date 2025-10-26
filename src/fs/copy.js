import fs from "fs/promises";
import path from "path";
import { cp } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    await fs.mkdir(path.join(__dirname, "files_copy"));
    await cp(
      path.resolve(__dirname, "files"),
      path.resolve(__dirname, "files_copy"),
      { recursive: true }
    );
  } catch {
    throw new Error("fs operation failed");
  }
};

await copy();
