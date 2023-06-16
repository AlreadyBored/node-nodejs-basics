import fs from "fs/promises";

const read = async () => {
  try {
    const filePath = "./files/fileToRead.txt";

    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      throw new Error("File does not exist.");
    }

    const fileContent = await fs.readFile(filePath, "utf8");
    console.log(fileContent);
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await read();
