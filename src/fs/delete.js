import fs from "fs/promises";
import path from "path";

const remove = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  try {
    await fs.rm(path.resolve(__dirname, "./files/fileToRemove.txt"));
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
