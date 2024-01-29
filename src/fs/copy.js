import fs from "fs/promises";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(__dirname, "files");
const copiedFilesDir = path.join(__dirname, "files_copy");

const copy = async () => {
    try {
        await fs.cp(targetDir, copiedFilesDir, {recursive: true, force: false, errorOnExist: true})
    } catch {
        throw new Error("FS operation failed")
    }
};

await copy();
