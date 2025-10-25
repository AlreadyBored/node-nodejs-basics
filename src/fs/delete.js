import fs from "node:fs/promises";

const remove = async () => {
  const path = "fileToRemove.txt";

  try {
    await fs.access(path);
    fs.rm(path);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};
await remove();
