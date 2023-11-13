import path from "path";
import fs from "fs/promises";

const rename = async () => {
  const currentDir = path.resolve("src", "fs", "files");
  const wrongFileName = "wrongFileName.txt";
  const properFileName = "properFilename.md";

  const wrongFilePath = path.join(currentDir, wrongFileName);
  const properFilePath = path.join(currentDir, properFileName);

  try {
    await fs.access(wrongFilePath);
    await fs.access(properFileName);

    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.rename(wrongFilePath, properFilePath);
      } catch (renameError) {
        throw new Error("FS operation failed");
      }
    } else {
      throw error;
    }
  }
};

await rename();
