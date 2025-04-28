import { readFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const data = await readFile(filePath, "utf8").catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }

    throw err;
  });

  console.log(data);
};

await read();
