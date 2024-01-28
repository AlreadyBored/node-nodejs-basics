import * as fs from "node:fs/promises";

export const folderPath = import.meta.dirname + "/files";
const filePath = folderPath + "/fresh.txt";

const create = async () => {
  try {
    const files = await fs.readdir(folderPath);
    if (files.includes("fresh.txt")) {
      throw new Error("FS operation failed");
    } else {
      await fs.appendFile(filePath, "I am fresh and young");
    }
  } catch (error) {
    console.error(error);
  }
};
await create();
