import { unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";


const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = join(__dirname, "files", "fileToRemove.txt");

    try {
        await unlink(filePath)
    } catch (error) {
        throw new Error("FS operation failed"); 
    }

};

await remove();