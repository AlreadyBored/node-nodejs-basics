import { join } from "path";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import { isFileExist } from "../utils/utils.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const folder = join(__dirname, "files");
  isFileExist(folder);
  try {
    const files = await readdir(folder);
    files.forEach((file) => console.log(file));
  } catch (error) {
    throw error;
  }
};

await list();
