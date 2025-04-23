import * as fs from "node:fs/promises";
import * as path from "node:path";

const remove = async () => {
    try {
        await fs.rm(path.join(import.meta.dirname, "files", "fileToRemove.txt"));
    } catch (err) {
        throw new Error("FS operation failed", err);
    }
};

await remove();
