import { cp } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourceDir = join(__dirname, "files");
  const destDir = join(__dirname, "files_copy");

  try {
    await cp(sourceDir, destDir, {recursive: true, errorOnExist: true, force: false})
  } catch (err) {
    console.log(err)
    throw new Error("FS operation failed");
  }
};

await copy();