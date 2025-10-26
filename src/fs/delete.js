import { unlink, access } from "node:fs/promises";
import { join } from "node:path";

const remove = async () => {
  const filePath = join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRemove.txt"
  );

  try {
    await access(filePath);
    await unlink(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
