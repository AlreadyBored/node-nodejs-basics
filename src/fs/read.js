import { readFile } from "node:fs/promises";

const read = async () => {
  const listSource = "./src/fs/files/fileToRead.txt";

  try {
    const listData = await readFile(listSource);
    console.log(listData.toString());
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
