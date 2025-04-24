import { promises as fs } from "fs";

const rename = async () => {
  const oldFilename = "files/wrongFilename.txt";
  const newFilename = "files/properFilename.md";

  try {
    try {
      await fs.access(oldFilename);
    } catch (error) {
      throw new Error("FS operation failed");
    }

    try {
      await fs.access(newFilename);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await fs.rename(oldFilename, newFilename);
  } catch (error) {
    throw error;
  }
};

await rename();
