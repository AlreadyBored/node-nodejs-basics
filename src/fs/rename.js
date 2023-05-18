import fs from "node:fs/promises";
const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
const newPath = new URL("./files/properFilename.md", import.meta.url);

const rename = async () => {
  // Write your code here
  try {
    try {
      await fs.access(newPath);
      throw new Error("Файл уже существует");
    } catch {}

    await fs.access(oldPath);
    fs.rename(oldPath, newPath);
  } catch (err) {
    throw Error("FS operation failed", err.message);
  }
};

await rename();
