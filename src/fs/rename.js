import fs from "fs/promises";

const rename = async () => {
  // Write your code here

  try {
    await fs.access("./files/wrongFilename.txt");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.access("./files/properFilename.md");
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
    } else {
      throw error;
    }
  }
};

await rename();
