import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldFilePath = path.join(__dirname, "files", "wrongFilename.txt")
    const newFilePath = path.join(__dirname, "files", "properFilename.md")
    const errorMessage = "FS operation failed";

    try {
        await fs.access(newFilePath)
        throw new Error(errorMessage);
    } catch (error) {
        try {
            await fs.access(oldFilePath)
            await fs.rename(oldFilePath, newFilePath);
        } catch (error) {
            throw new Error(errorMessage);
        }
    }
};

await rename();
