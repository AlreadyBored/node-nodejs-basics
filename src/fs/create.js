import path from "path";
import { writeFile } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    const isFileExists = await isExists(filePath);

    if (isFileExists) {
      throw new Error("FS operation failed: file already exists!");
    }

    await writeFile(filePath, "I am fresh and young", { flag: "wx" });

    console.log("File was successfully created!");
  } catch (error) {
    console.error(error);
  }
};

await create();
