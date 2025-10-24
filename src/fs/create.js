import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { writeFile, readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  } else {
    await writeFile(filePath, "I am fresh and young");
    console.log("fresh.txt created successfully");
  }
};

await create();
