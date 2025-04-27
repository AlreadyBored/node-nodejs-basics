import { cp } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = dirname(__filename);

  const sourceDir = join(dirname, "files");
  const destDir = join(dirname, "files_copy");

  try {
    await cp(sourceDir, destDir, {recursive: true})
  } catch (err) {
    console.log(err)
    throw new Error("FS operation failed");
  }
};

await copy();