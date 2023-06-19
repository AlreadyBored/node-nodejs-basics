import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files");

  try {
    await fs.promises.stat(sourcePath);
    console.log("files:");
    const files = await fs.promises.readdir(sourcePath);
    files.forEach((name) => {
      console.log(name);
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed!");
    } else {
      throw err;
    }
  }
};

await list();
