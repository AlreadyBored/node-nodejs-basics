import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorText = "FS operation failed";

const read = async () => {
  // Write your code here
  const fileToRead = path.join(__dirname, "fileToRead.js");

  try {
    //Check file exists
    try {
      await fs.access(fileToRead);
    } catch (error) {
      throw new Error(errorText);
    }

    //Read file content
    const fileContent = await fs.readFile(fileToRead, "utf8");

    //Log file content
    console.log(fileContent);
  } catch (error) {
    throw new Error(errorText);
  }
};

await read();
