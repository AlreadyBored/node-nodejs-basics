import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const oldFileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";
  const filePath = path.join("src/fs/files");

  try {
    await fs.access(oldFileName);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      fs.rename(`${filePath}/${oldFileName}`, `${filePath}/${newFileName}`);
      console.log("File renamed successful!");
    } else {
      console.log(error);
    }
  }
};

await rename();
