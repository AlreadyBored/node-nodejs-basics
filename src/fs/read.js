import fs from "node:fs/promises";
import path from "node:path";
import { FILES_DIR } from "./config.js";

const read = async () => {
  try {
    const content = await fs.readFile(
      path.resolve(FILES_DIR, "fileToRead.txt"),
      { encoding: "utf-8" }
    );
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
