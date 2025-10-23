import path from "path";
import fs from "fs/promises";

const read = async () => {
  const filePath = path.join("files", "fileToRead.txt");

  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    throw new Error("Fs operation failed");
  }
};

await read();
