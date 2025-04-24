import { promises as fs } from "fs";

const read = async () => {
  const filename = "files/fileToRead.txt";

  try {
    try {
      await fs.access(filename);
    } catch (error) {
      throw new Error("FS operation failed");
    }

    const content = await fs.readFile(filename, "utf8");

    console.log(content);
  } catch (error) {
    throw error;
  }
};

await read();
