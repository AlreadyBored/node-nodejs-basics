import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  try {
    console.log(await readdir(join(__dirname, "files")));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
