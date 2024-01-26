import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const create = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // fileForCreate for creating fresh file.
  const fileForCreate = path.join(__dirname, "files",'fresh.txt');

  try {
    // Check if file exists.
    await fs.access(fileForCreate);
    throw new Error("FS operation failed");
  } catch (err) {
    // Create fresh file.
    if (err.code === "ENOENT") {
      // "ENOENT" - No such file or directory
      await fs.writeFile(fileForCreate, "I am fresh and young");
    } else {
      // the rest errors.
      throw err;
    }
  }
};

await create();
