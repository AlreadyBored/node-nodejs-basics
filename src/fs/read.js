import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, "files", "fileToRead.txt");
    const errorMessage = "FS operation failed";

    try {
        const fileContent = await readFile(filePath, "utf-8");
        console.log(fileContent);
    } catch (error) {
        throw new Error(errorMessage)
    }
};

await read();
