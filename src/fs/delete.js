import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    try {
        await fs.rm(path.join(__dirname, "files", "fileToRemove.txt"));
    } catch {
        throw new Error("FS operation failed")
    }
};

await remove();