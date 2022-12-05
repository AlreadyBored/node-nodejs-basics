import * as fs from "fs/promises";
import * as path from "path";

const read = async () => {
  const fileName = "fileToRead.txt";
  const fullPath = path.join(process.cwd(), "src", "fs", "files", fileName);

  try {
    console.log(await fs.readFile(fullPath, { encoding: "utf-8" }));
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
