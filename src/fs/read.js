import { promises as fs } from "fs";

const read = async () => {
  const filePath = "src/fs/files/fileToRead.txt";
  try {
    const content = await fs.readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await read();
