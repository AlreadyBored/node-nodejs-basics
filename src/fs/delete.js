import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "fileToRemove.txt");
  
try {
    await fs.promises.stat(sourcePath);
    await fs.promises.unlink(sourcePath);
    console.log("file is deleted!");
  } catch (err) {
    if (err.code === "ENOENT") {
        throw new Error("FS operation failed!");
       
    } else {
      throw err;
    }
  }
};

await remove();
