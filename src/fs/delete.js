import * as fs from "node:fs/promises";
import * as path from "node:path";

const remove = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files", "fileToRemove.txt"))
    .then(async () => {
      await fs.rm(path.join(__dirname, "files", "fileToRemove.txt"));
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
      throw err;
    });
};

await remove();
