import { promises as fs } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const dirPath = join(__dirname, "files");

  try {
    await fs.access(dirPath);
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await list();

// const list = async () => {
//     // Write your code here
// };

// await list();
