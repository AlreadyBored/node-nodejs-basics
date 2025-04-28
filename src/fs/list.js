import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorText = "FS operation failed";
const list = async () => {
  const filesFolder = path.join(__dirname, "files");

  try {
    // Check if files folder exists
    try {
      await fs.access(filesFolder);
    } catch (error) {
      throw new Error(errorText);
    }

    // Read filenames from files folder
    const filenames = await fs.readdir(filesFolder);

    // Print array of filenames
    console.log(filenames);
  } catch (error) {
    throw new Error(errorText);
  }
};

await list();
