import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fs.promises.stat(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.writeFile(filePath, "I am fresh and young");
      console.log("success");
    } else {
      throw err;
    }
  }
};

await create();
