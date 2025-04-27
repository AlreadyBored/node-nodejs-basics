import { access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourceDir = join(__dirname, "files");
  const destDir = join(__dirname, "files_copy");

  try {
    await access(sourceDir);

    try {
      await access(destDir);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        await mkdir(destDir);
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();