import * as fs from "node:fs/promises";
import * as path from "node:path";

const rename = async () => {
    try {
        await fs.rename(
            path.join(import.meta.dirname, "files", "wrongFilename.txt"),
            path.join(import.meta.dirname, "files", "properFilename.md")
        );
    } catch (err) {
        throw new Error("FS operation failed", err);
    }
};

await rename();
