import { copyFile, mkdir, readdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const src = join(__dirName, "files");
const dest = join(__dirName, "files_copy");

const copy = async () => {
    try {
        await mkdir(dest, { recursive: false });

        const files = await readdir(src);
        for (const file of files) {
            await copyFile(join(src, file), join(dest, file));
        }
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await copy();
