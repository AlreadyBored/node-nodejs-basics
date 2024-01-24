import { readFile } from "fs/promises";

const read = async () => {
  try {
    const fileData = await readFile("src/fs/files/fileToRead.txt", {
      encoding: "utf-8",
    });
    console.log(fileData);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
