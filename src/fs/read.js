import { readFile, access } from "node:fs/promises";
import { join } from "node:path";

const read = async () => {
  const filePath = join(process.cwd(), "src", "fs", "files", "fileToRead.txt");

  try {
    await access(filePath);
    const content = await readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await read();
