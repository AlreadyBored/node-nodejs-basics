import fs from "node:fs/promises";
import path from "path";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToRead = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    try {
        const data = await fs.readFile(pathToRead, "utf-8");
        console.log(data);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();