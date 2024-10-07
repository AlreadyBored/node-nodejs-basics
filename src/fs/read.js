import { promises as fs } from "fs";
import path from "path";

const read = async () => {
  const filePath = path.join("src", "fs", "files", "fileToRead.txt");

  try {
    await fs.access(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  const file = await fs.readFile(filePath, { encoding: "utf8" });
  console.log(file);
};

await read();
