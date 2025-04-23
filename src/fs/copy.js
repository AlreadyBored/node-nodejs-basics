import * as fs from "node:fs/promises";
import * as path from "node:path";

const copy = async () => {
    try {
        await fs.cp(
            path.join(import.meta.dirname, "files", "/"),
            path.join(import.meta.dirname, "files_copy", "/"),
            { errorOnExist: true, recursive: true, force: false }
        );
    } catch (err) {
        throw new Error("FS operation failed", err);
    }
};

await copy();
