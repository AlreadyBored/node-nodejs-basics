import { readdir, writeFile } from "node:fs";
import { access, constants } from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, "files");

const create = async () => {
  try {
    await access(`${filesFolder}/fresh.txt`, constants.F_OK);
      throw new Error("FS operation failed");
  } catch (err) {
    if (err) {
      writeFile(
        `${filesFolder}/fresh.txt`,
        "I am fresh and young",
        function (err) {
          if (err) throw new Error("FS operation failed");
        }
      );
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await create();
