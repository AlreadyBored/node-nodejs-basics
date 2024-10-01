import * as fs from "node:fs/promises";
import * as path from "node:path";

const read = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files", "fileToRead.txt"))
    .then(async () => {
      const content = await fs.readFile(
        path.join(__dirname, "files", "fileToRead.txt"),
        "utf-8"
      );
      console.log(content);
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
      throw err;
    });
};

await read();
