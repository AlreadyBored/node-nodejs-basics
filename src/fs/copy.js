import { cp, access } from "node:fs/promises";
import { join } from "node:path";

const copy = async () => {
  const sourcePath = join(process.cwd(), "src", "fs", "files");
  const destPath = join(process.cwd(), "src", "fs", "files_copy");

  try {
    // Check if files directory exists
    await access(sourcePath);

    // Check if files_copy directory exists
    try {
      await access(destPath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        // do copy
        await cp(sourcePath, destPath, { recursive: true });
      } else {
        throw new Error("FS operation failed");
      }
    }
  } catch (error) {
    if (error.message === "FS operation failed") {
      throw error;
    }

    throw new Error("FS operation failed");
  }
};

await copy();
