import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  let filePath = path.resolve(__dirname, "./files", "fresh.txt");

  fs.access(filePath, async (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    } else {
      fs.writeFile(filePath, "I am fresh and young");
    }
  });
};

await create();
