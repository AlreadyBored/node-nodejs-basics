import * as fs from "node:fs/promises";
import * as path from "node:path";

const list = async () => {
    try {
        const files = await fs.readdir(path.join(import.meta.dirname, "files", "/"));
        for (let f of files) {
            console.log(f);
        }
    } catch (err) {
        throw new Error("FS operation failed", err);
    }
};

await list();
