import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const filesPath = path.join(__dirname, "files");
    const errorMessage = "FS operation failed";

    try {
        const filesList = await readdir(filesPath);
        console.log(filesList);
    } catch (error) {
        throw new Error(errorMessage);
    }

};

await list();
