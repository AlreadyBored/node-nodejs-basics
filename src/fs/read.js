import fs from "fs/promises";

const read = async () => {
  const fileName = "./src/fs/files/fileToRead.txt";
  try {
    const fileContent = await fs.readFile(fileName, "utf-8");
    console.log(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
        throw new Error("FS operation failed");
    }
  }
};

await read();