import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await fs.readFile(fileToRead, { encoding: "utf-8" });
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") throw Error("FS operation failed");
    throw Error(error);
  }
};

await read();
