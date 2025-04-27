import { rename as renamePromise} from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
  
    const oldPath = join(__dirname, "files", "wrongFilename.txt");
    const newPath = join(__dirname, "files", "properFilename.md"); 

    try {
        await renamePromise(oldPath, newPath);
      } catch (err) {
        throw new Error("FS operation failed");
      }
};

await rename();