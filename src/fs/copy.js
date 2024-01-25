import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const pathCopyFrom = path.join(__dirname, "..", "fs", "files");
  const pathCopyTo = path.join(__dirname, "..", "fs", "files_copy");

  if (!fs.existsSync(pathCopyFrom) || fs.existsSync(pathCopyTo)) {
    throw new Error("FS operation failed");
  }

  fs.cp(pathCopyFrom, pathCopyTo, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\nFile was Copied\n");
    }
  });
};

await copy();
