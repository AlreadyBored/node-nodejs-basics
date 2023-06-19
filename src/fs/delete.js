import { rm } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await rm(file);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await remove();
