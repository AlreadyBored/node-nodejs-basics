import * as fs from "node:fs/promises";
import * as path from "node:path";

const copy = async () => {
  const __dirname = import.meta.dirname;

  fs.access(path.join(__dirname, "files_copy"))
    .then(() => {
      throw new Error("FS operation failed");
    })
    .catch((err) => {
      if (err.code !== "ENOENT") {
        throw err;
      }
    });

  fs.access(path.join(__dirname, "files")).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });

  fs.cp(path.join(__dirname, "files"), path.join(__dirname, "files_copy"), {
    recursive: true,
  }).catch((err) => {
    throw new Error("FS operation failed");
  });
};

await copy();
