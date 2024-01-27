import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const newPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await fs.rename(oldPath, newPath);
    } catch {
        throw new Error("FS operation failed")
    }
};

await rename();