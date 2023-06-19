import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const fileData = "I am fresh and young";
const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fresh.txt");

const create = async () => {
    try {
        await writeFile(file, fileData, { flag: "wx" });
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await create();
