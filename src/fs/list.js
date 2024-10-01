import * as fs from "node:fs/promises";
import * as path from "node:path";

const list = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files")).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });

  const files = await fs.readdir(path.join(__dirname, "files"));
  console.log(files);
};

await list();
