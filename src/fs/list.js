import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const list = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename, "files");

  try {
    const files = await fs.readdir(__dirname);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
