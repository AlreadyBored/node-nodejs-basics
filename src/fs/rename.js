import { rename as newName, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const rename = async () => {
  try {
    await stat(`${dirName}/files/properFilename.md`);

    throw new Error("FS operation failed");
  } catch (e) {
    if (e.message !== "FS operation failed") {
      await newName(
        `${dirName}/files/wrongFilename.txt`,
        `${dirName}/files/properFilename.md`
      ).catch(() => {
        throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await rename();