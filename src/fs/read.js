import * as fs from "node:fs/promises";
import * as path from "node:path";

const read = async () => {
    try {
        const file = await fs.readFile(path.join(import.meta.dirname, "files", "fileToRead.txt"), {
            encoding: "utf8",
        });
        console.log(file);
    } catch (err) {
        throw new Error("FS operation failed", err);
    }
};

await read();
