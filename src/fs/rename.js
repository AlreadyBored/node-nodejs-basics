import { existsSync } from "node:fs";
import { rename as fsRename } from "node:fs/promises";

const rename = async () => {
  const sourcePath = "./src/fs/files/wrongFilename.txt";
  const destPath = "./src/fs/files/properFilename.md";

  if (!existsSync(sourcePath) || existsSync(destPath)) {
    throw new Error("FS operation failed");
  }

  try {
    await fsRename(sourcePath, destPath);
    console.log("File renamed successfully!");
  } catch (err) {
    if (err.code === "ENOENT") {
      if (!err.message.includes("Destination")) throw err;
    } else {
      console.error("Error renaming file:", err.message);

      throw err;
    }
  }
};

await rename();
