import fs from "fs/promises";

const rename = async () => {
  try {
    const sourceFilePath = "./files/wrongFilename.txt";
    const targetFilePath = "./files/properFilename.md";

    const sourceFileExists = await fs
      .access(sourceFilePath)
      .then(() => true)
      .catch(() => false);

    if (!sourceFileExists) {
      throw new Error("Source file does not exist.");
    }

    const targetFileExists = await fs
      .access(targetFilePath)
      .then(() => true)
      .catch(() => false);

    if (targetFileExists) {
      throw new Error("Target file already exists.");
    }

    await fs.rename(sourceFilePath, targetFilePath);
    console.log("File renamed successfully.");
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await rename();
