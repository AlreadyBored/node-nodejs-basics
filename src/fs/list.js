import fs from "node:fs";
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderToPath = `${__dirname}/files`;
  try {
    const files = fs.readdirSync(folderToPath);

    files.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (error) {
    console.error("FS operation failed", error.message);
  }
};

await list();
