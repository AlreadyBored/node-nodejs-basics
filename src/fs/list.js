// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = path.join(__dirname, "files");

  try {
    // Check if the files folder exists
    await fs.access(folderPath);

    // Read and print the filenames in the files folder
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the folder doesn't exist, throw an error
      throw new Error("FS operation failed");
    } else {
      // Rethrow any other errors
      throw error;
    }
  }
};

await list();
