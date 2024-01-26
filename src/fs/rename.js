import fs from "node:fs/promises";
import path from "path";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const newPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await fs.rename(oldPath, newPath);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();