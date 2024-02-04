import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const list = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, "files");
    const filenames = await fs.readdir(folderPath, {withFileTypes: true});
    filenames.forEach((file) => {
      console.log(file.name);
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
