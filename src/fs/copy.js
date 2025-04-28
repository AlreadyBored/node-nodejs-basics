import { access, cp } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "files");
const dest = join(__dirname, "files_copy");

const copy = async () => {
  try {
    await access(src);
    await access(dest);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      return await cp(src, dest, { recursive: true, force: false });
    }
    throw new Error("FS operation failed");
  }
};

await copy();
