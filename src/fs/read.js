import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  try {
    console.log(
      await readFile(join(__dirname, "files/fileToRead.txt"), {
        encoding: "utf-8",
      })
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
