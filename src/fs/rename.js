import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  const oldFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "wrongFilename.txt"
  );
  const newFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "properFilename.md"
  );
  console.log(oldFilePath);
  console.log(newFilePath);

  try {
    await fs.access(oldFilePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: wrongFilename.txt doesn't exists");
    }
    throw error;
  }

  try {
    await fs.access(newFilePath);
    throw new Error("FS operation failed: properFilename.md already exists");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  await fs.rename(oldFilePath, newFilePath);
};

await rename();
