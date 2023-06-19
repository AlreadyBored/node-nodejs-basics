import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const file = join(__dirName, "files", "fileToRead.txt");

const read = async () => {
    try {
        const contents = await readFile(file, { encoding: "utf8" });
        console.log(contents);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await read();
