import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
    const pathToDir = path.join(__dirname, "files");
    const destinationPath = path.join(__dirname, "files_copy");

    try {
        if (existsSync(destinationPath)) {
            throw new Error("FS operation failed");
        }
        await cp(pathToDir, destinationPath, {
            recursive: true,
        });
    } catch (err) {
        console.log(err);
    }
};

await copy();
