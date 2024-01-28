import { rm } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, "files", "fileToRemove.txt");
    const errorMessage = "FS operation failed";

    try {
        await rm(filePath);
    } catch (error) {
        throw new Error(errorMessage);
    }

};

await remove();
