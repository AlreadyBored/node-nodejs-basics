import { promises as fsPromises } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve("src/fs/files/fresh.txt");
const fileContent = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  try {
    await fsPromises.writeFile(filePath, fileContent, { flag: "wx" });
    console.log("File created successfully!");
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
