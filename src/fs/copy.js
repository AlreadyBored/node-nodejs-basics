import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcTo = path.join(__dirname, "files_copy");
const src = path.join(__dirname, "files");

const copy = async () => {
  try {
    await fsPromises.access(srcTo);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw err;
    }
  }

  try {
    await fsPromises.cp(src, srcTo, { recursive: true });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy();
