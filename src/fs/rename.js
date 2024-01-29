import { rename as renameFile } from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "files", "wrongFilename.txt");
const outputFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await renameFile(target, outputFile);
    } catch {
        throw new Error('FS operation failed')
    }
};

await rename();
