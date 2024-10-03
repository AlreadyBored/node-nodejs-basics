import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("./src/fs/files/fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
