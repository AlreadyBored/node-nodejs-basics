import { fileURLToPath } from "node:url";
import path from "path";
import { rename as fileRename } from "node:fs";

const rename = async () => {
  const filePath = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filePath);
  const oldPath = path.join(dirname, "files", "wrongFilename.txt");
  const newPath = path.join(dirname, "files", "properFilename.md");

  fileRename(oldPath, newPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
