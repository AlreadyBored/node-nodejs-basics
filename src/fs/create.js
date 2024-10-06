import { writeFile } from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const create = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileDirectory = path.join(__dirname, "files", "fresh.txt");

  try {
    await writeFile(fileDirectory, "I am fresh and young", { flag: "ax" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
