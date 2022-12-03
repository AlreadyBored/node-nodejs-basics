import { rename as renameFile, stat } from "fs/promises";
import path from "path";
import * as url from "url";

export const errorMassage = "FS operation failed";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToOldFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToNewFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
      await stat(pathToNewFile);

      console.log(errorMassage);
    } catch {
      renameFile(pathToOldFile, pathToNewFile).catch(() =>
        console.log(errorMassage)
      );
    }
};

await rename();
