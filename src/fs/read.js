import fs from "fs/promises";
import path from "path";

const read = async () => {
  const dir = path.join(process.cwd(), "files", "fileToRead.txt");

  // check file status, there or not
  const fileExist = await fs
    .access(dir)
    .then(() => true)
    .catch(() => false);
  if (!fileExist) {
    throw new Error("FS operation failed");
  }

  // read the file content in utf-8 format
  const content = await fs.readFile(dir, "utf-8");
  console.log(content);
};

await read();
