import { rename as fsRename } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const srcDir = join(__dirName, "files");

const rename = async () => {
    try {
        const oldPath = join(srcDir, "wrongFilename.txt");
        const newPath = join(srcDir, "properFilename.md");
        if (existsSync(newPath)) throw new Error();
        await fsRename(oldPath, newPath);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await rename();
