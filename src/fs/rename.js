import * as fs from "node:fs/promises";
import * as path from "node:path";

const rename = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files", "wrongFilename.txt")).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });

  fs.access(path.join(__dirname, "files", "properFilename.md"))
    .then(() => {
      throw new Error("FS operation failed");
    })
    .catch((err) => {
      if (err.code !== "ENOENT") {
        throw err;
      }
    });

  await fs.rename(
    path.join(__dirname, "files", "wrongFilename.txt"),
    path.join(__dirname, "files", "properFilename.md")
  );
};

await rename();
