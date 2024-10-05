// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  // Write your code here

  // @ts-ignore
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    // check if the file exists
    await fs.promises.access(filePath, fs.constants.F_OK);
    // throw an error, if file exist
    throw new Error("FS operation failed");
  } catch (error) {
    // error is because the file does not exist
    // ENOENT === the directory does not exist
    if (error.code === "ENOENT") {
      // Create the file and write content to it
      await fs.promises.writeFile(filePath, "I am fresh and young");
      console.log("File created successfully");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await create();
