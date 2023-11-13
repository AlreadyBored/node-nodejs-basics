import path from "path";
import fs from "fs/promises";

const read = async () => {
  const currentDir = path.resolve("src", "fs");
  const fileName = "fileToRead.txt";
  const filePath = path.join(currentDir, "files", fileName);

  try {
    await fs.access(filePath);
    const fileContent = await fs.readFile(filePath, "utf8");
    console.log("File content:");
    console.log(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await read();
