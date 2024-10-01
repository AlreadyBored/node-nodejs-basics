import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  // Write your code here
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
