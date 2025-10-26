import { rename, access } from "node:fs/promises";
import { join } from "node:path";

const rename = async () => {
  const oldPath = join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "wrongFilename.txt"
  );
  const newPath = join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "properFilename.md"
  );

  try {
    // Check if wrongFilename.txt exists
    await access(oldPath);

    // Check if properFilename.md file exists
    try {
      await access(newPath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        await rename(oldPath, newPath);
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

await rename();
