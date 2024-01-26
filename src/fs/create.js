import fs from "node:fs/promises";
import path from "path";
import * as url from 'url';
    
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToWriteText = path.join(__dirname, "files", "fresh.txt");
const text = "I am fresh and young";

const create = async () => {
    try {
        await fs.writeFile(pathToWriteText, text , { flag: "wx" });
    } catch {
        throw new Error("FS operation failed");
    }
};

await create(); 