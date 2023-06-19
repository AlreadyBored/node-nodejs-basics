import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const src = join(__dirName, "files");

const list = async () => {
    try {
        const files = await readdir(src);
        for (const file of files) {
            console.log(file);
        }
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();
