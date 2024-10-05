import fs from "fs/promises";

const read = async () => {
  const filePath = "src/fs/files/fileToRead.txt";

  try {
    await fs.access(filePath, fs.constants.F_OK);
    const content = await fs.readFile(filePath, "utf8");
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
