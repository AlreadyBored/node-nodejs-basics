import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  );

  try {
    await fs.access(filePath);
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: fileToRead.txt doesn't exists");
    }
    throw error;
  }
};

await read();
