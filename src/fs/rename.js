import fs from "fs/promises";
import path from "path";

const rename = async () => {
  // Write your code here

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  try {
    await fs.access(path.resolve(__dirname, "./files/wrongFilename.txt"));
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.access(path.resolve(__dirname, "./files/properFilename.md"));
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.rename(
        path.resolve(__dirname, "./files/wrongFilename.txt"),
        path.resolve(__dirname, "./files/properFilename.md")
      );
    } else {
      throw error;
    }
  }
};

await rename();
