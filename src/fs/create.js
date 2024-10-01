import * as fs from "node:fs/promises";
import * as path from "node:path";

const create = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files", "file.txt"))
    .then(() => {
      throw new Error("FS operation failed");
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        fs.writeFile(
          path.join(__dirname, "files", "file.txt"),
          "I am fresh and young"
        );
      } else {
        throw err;
      }
    });
};

await create();
